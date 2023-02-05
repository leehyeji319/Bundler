package com.ssafy.bundler.config;

import static org.springframework.security.config.Customizer.*;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsUtils;

import com.ssafy.bundler.config.auth.AuthTokenProvider;
import com.ssafy.bundler.config.properties.AppProperties;
import com.ssafy.bundler.config.properties.CorsProperties;
import com.ssafy.bundler.domain.RoleType;
import com.ssafy.bundler.exception.RestAuthenticationEntryPoint;
import com.ssafy.bundler.filter.TokenAuthenticationFilter;
import com.ssafy.bundler.handler.OAuth2AuthenticationFailureHandler;
import com.ssafy.bundler.handler.OAuth2AuthenticationSuccessHandler;
import com.ssafy.bundler.handler.TokenAccessDeniedHandler;
import com.ssafy.bundler.repository.OAuth2AuthorizationRequestBasedOnCookieRepository;
import com.ssafy.bundler.repository.UserRefreshTokenRepository;
import com.ssafy.bundler.service.CustomOAuth2UserService;
import com.ssafy.bundler.service.CustomUserDetailsService;

import lombok.RequiredArgsConstructor;

// https://github.com/spring-projects/spring-security/issues/10822 참고
@Configuration
@EnableWebSecurity // 시큐리티 활성화 -> 기본 스프링 필터체인에 등록
@RequiredArgsConstructor
public class SecurityConfig {

	// private final PrincipalOauth2UserService principalOauth2UserService;
	// private final UserRepository userRepository;

	// @Autowired
	// private CorsConfig corsConfig;

	////////////////////////////////
	// private final AuthenticationManager authenticationManager;
	private final CorsProperties corsProperties;
	private final AppProperties appProperties;
	private final AuthTokenProvider tokenProvider;
	private final CustomUserDetailsService userDetailsService;
	private final CustomOAuth2UserService oAuth2UserService;
	private final TokenAccessDeniedHandler tokenAccessDeniedHandler;
	private final UserRefreshTokenRepository userRefreshTokenRepository;
	////////////////////////////////

	@Bean
	SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
		return http
			.cors(withDefaults())

			.sessionManagement(httpSecuritySessionManagementConfigurer ->
				httpSecuritySessionManagementConfigurer
					.sessionCreationPolicy(SessionCreationPolicy.STATELESS)
			)

			.csrf(httpSecurityCsrfConfigurer ->
				httpSecurityCsrfConfigurer
					.disable()
			)

			.formLogin(httpSecurityFormLoginConfigurer ->
				httpSecurityFormLoginConfigurer
					.disable()
			)

			.httpBasic(httpSecurityHttpBasicConfigurer ->
				httpSecurityHttpBasicConfigurer
					.disable()
			)

			.exceptionHandling(httpSecurityExceptionHandlingConfigurer ->
				httpSecurityExceptionHandlingConfigurer
					.authenticationEntryPoint(new RestAuthenticationEntryPoint())
					.accessDeniedHandler(tokenAccessDeniedHandler)
			)

			.apply(new MyCustomDsl()) // 커스텀 필터 등록
			.and()

			.securityMatcher("/api/**")
			.authorizeHttpRequests(authroize ->
				authroize
					.requestMatchers(CorsUtils::isPreFlightRequest).permitAll()
					.requestMatchers("/auth/admin/**").hasAuthority(RoleType.ADMIN.getCode())
					// .requestMatchers("/auth/manager/**").hasRole("MANAGER")
					.requestMatchers("/auth/**").hasAuthority(RoleType.USER.getCode())
			)

			.oauth2Login(httpSecurityOAuth2LoginConfigurer ->
				httpSecurityOAuth2LoginConfigurer
					.authorizationEndpoint(authorizationEndpointConfig ->
						authorizationEndpointConfig
							.baseUri("/oauth2/authorization")
							.authorizationRequestRepository(oAuth2AuthorizationRequestBasedOnCookieRepository())
					)
					.redirectionEndpoint(redirectionEndpointConfig ->
						redirectionEndpointConfig
							.baseUri("/*/oauth2/code/*")
					)
					.userInfoEndpoint(userInfoEndpointConfig ->
						userInfoEndpointConfig
							.userService(oAuth2UserService)
					)
					.successHandler(oAuth2AuthenticationSuccessHandler())
					.failureHandler(oAuth2AuthenticationFailureHandler())
			)

			.addFilterBefore(tokenAuthenticationFilter(), UsernamePasswordAuthenticationFilter.class)

			.build();
	}

	/*
	 * auth 매니저 설정
	 * */
	// @Bean(BeanIds.AUTHENTICATION_MANAGER)
	// protected AuthenticationManager authenticationManager() throws Exception {
	// 	return
	// }

	public class MyCustomDsl extends AbstractHttpConfigurer<MyCustomDsl, HttpSecurity> {
		@Override
		public void configure(HttpSecurity http) throws Exception {
			AuthenticationManagerBuilder authenticationManagerBuilder = http.getSharedObject(
				AuthenticationManagerBuilder.class);
			authenticationManagerBuilder
				.userDetailsService(userDetailsService).passwordEncoder(passwordEncoder());

			AuthenticationManager authenticationManager = http.getSharedObject(AuthenticationManager.class);
			http.authenticationManager(authenticationManager);

			// http
			// .addFilter(corsConfig.corsFilter())
			// .addFilter(new JwtAuthenticationFilter(authenticationManager))
			// .addFilter(new JwtAuthorizationFilter(authenticationManager, userRepository));
			// 	.addFilterBefore(tokenAuthenticationFilter(), UsernamePasswordAuthenticationFilter.class);
		}
	}

	/*
	 * security 설정 시, 사용할 인코더 설정
	 * */
	@Bean
	public BCryptPasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}

	/*
	 * 토큰 필터 설정
	 * */
	@Bean
	public TokenAuthenticationFilter tokenAuthenticationFilter() {
		return new TokenAuthenticationFilter(tokenProvider);
	}

	/*
	 * 쿠키 기반 인가 Repository
	 * 인가 응답을 연계 하고 검증할 때 사용.
	 * */
	@Bean
	public OAuth2AuthorizationRequestBasedOnCookieRepository oAuth2AuthorizationRequestBasedOnCookieRepository() {
		return new OAuth2AuthorizationRequestBasedOnCookieRepository();
	}

	/*
	 * Oauth 인증 성공 핸들러
	 * */
	@Bean
	public OAuth2AuthenticationSuccessHandler oAuth2AuthenticationSuccessHandler() {
		return new OAuth2AuthenticationSuccessHandler(
			tokenProvider,
			appProperties,
			userRefreshTokenRepository,
			oAuth2AuthorizationRequestBasedOnCookieRepository()
		);
	}

	/*
	 * Oauth 인증 실패 핸들러
	 * */
	@Bean
	public OAuth2AuthenticationFailureHandler oAuth2AuthenticationFailureHandler() {
		return new OAuth2AuthenticationFailureHandler(oAuth2AuthorizationRequestBasedOnCookieRepository());
	}

	/*
	 * Cors 설정
	 * */
	// @Bean
	// public UrlBasedCorsConfigurationSource corsConfigurationSource() {
	// 	UrlBasedCorsConfigurationSource corsConfigSource = new UrlBasedCorsConfigurationSource();
	//
	// 	CorsConfiguration corsConfig = new CorsConfiguration();
	// 	corsConfig.setAllowedHeaders(Arrays.asList(corsProperties.getAllowedHeaders().split(",")));
	// 	corsConfig.setAllowedMethods(Arrays.asList(corsProperties.getAllowedMethods().split(",")));
	// 	corsConfig.setAllowedOrigins(Arrays.asList(corsProperties.getAllowedOrigins().split(",")));
	// 	corsConfig.setAllowCredentials(true);
	// 	corsConfig.setMaxAge(corsConfig.getMaxAge());
	//
	// 	corsConfigSource.registerCorsConfiguration("/**", corsConfig);
	// 	return corsConfigSource;
	// }

}
