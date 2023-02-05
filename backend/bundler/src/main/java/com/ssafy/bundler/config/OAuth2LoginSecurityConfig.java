package com.ssafy.bundler.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class OAuth2LoginSecurityConfig {

	@Bean
	public SecurityFilterChain OAuthFilterChain(HttpSecurity http) throws Exception {
		http
			.oauth2Login(oauth2 -> oauth2
					.loginPage("/login/oauth2")
				// .authorizationEndpoint(authorization -> authorization
				// 	.baseUri("/login/oauth2/authorization")
				// )
			);
		return http.build();
	}
}