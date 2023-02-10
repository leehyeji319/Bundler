package com.ssafy.bundler.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.bundler.config.auth.AuthTokenProvider;
import com.ssafy.bundler.config.jwt.JwtToken;
import com.ssafy.bundler.config.properties.AppProperties;
import com.ssafy.bundler.dto.JwtTokenDto;
import com.ssafy.bundler.dto.LoginRequestDto;
import com.ssafy.bundler.dto.SignupRequestDto;
import com.ssafy.bundler.dto.TokenReIssueRequest;
import com.ssafy.bundler.dto.UserDto;
import com.ssafy.bundler.repository.UserRefreshTokenRepository;
import com.ssafy.bundler.service.AuthService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/api/v1")
@RequiredArgsConstructor
@Slf4j
public class AuthController {

	private final AppProperties appProperties;
	private final AuthTokenProvider tokenProvider;
	private final AuthenticationManager authenticationManager;
	private final UserRefreshTokenRepository userRefreshTokenRepository;
	private final AuthService authService;

	// @Autowired
	// private UserService userService;

	private final static long THREE_DAYS_MSEC = 259200000;
	private final static String REFRESH_TOKEN = "refresh_token";

	@PostMapping("/signup")
	public ResponseEntity<UserDto> signUp(@RequestBody SignupRequestDto signupRequestDto) {
		log.debug("/signup 진입");
		return ResponseEntity.ok(authService.signUp(signupRequestDto));
	}

	// @PostMapping("/login")
	// public ApiResponse login(
	// 	HttpServletRequest request,
	// 	HttpServletResponse response,
	// 	@RequestBody LoginRequestDto authRequestDto
	// ) {
	// 	Authentication authentication = authenticationManager.authenticate(
	// 		new UsernamePasswordAuthenticationToken(
	// 			authRequestDto.getUserEmail(),
	// 			authRequestDto.getUserPassword()
	// 		)
	// 	);
	//
	// 	String userEmail = authRequestDto.getUserEmail();
	// 	SecurityContextHolder.getContext().setAuthentication(authentication);
	//
	// 	Date now = new Date();
	// 	AuthToken accessToken = tokenProvider.createAuthToken(
	// 		userEmail,
	// 		((UserPrincipal)authentication.getPrincipal()).getUserRole().getCode(),
	// 		new Date(now.getTime() + appProperties.getAuth().getTokenExpiry())
	// 	);
	//
	// 	long refreshTokenExpiry = appProperties.getAuth().getRefreshTokenExpiry();
	// 	AuthToken refreshToken = tokenProvider.createAuthToken(
	// 		appProperties.getAuth().getTokenSecret(),
	// 		new Date(now.getTime() + refreshTokenExpiry)
	// 	);
	//
	// 	// userEmail refresh token 으로 DB 확인
	// 	UserRefreshToken userRefreshToken = userRefreshTokenRepository.findByUser_UserEmail(userEmail).orElseThrow();
	// 	if (userRefreshToken == null) {
	// 		// 없는 경우 새로 등록
	// 		userRefreshToken = new UserRefreshToken(userEmail, refreshToken.getToken());
	// 		userRefreshTokenRepository.saveAndFlush(userRefreshToken);
	// 	} else {
	// 		// DB에 refresh 토큰 업데이트
	// 		userRefreshToken.setRefreshToken(refreshToken.getToken());
	// 	}
	//
	// 	int cookieMaxAge = (int)refreshTokenExpiry / 60;
	// 	CookieUtil.deleteCookie(request, response, REFRESH_TOKEN);
	// 	CookieUtil.addCookie(response, REFRESH_TOKEN, refreshToken.getToken(), cookieMaxAge);
	//
	// 	return ApiResponse.success("token", accessToken.getToken());
	// }
	//
	// @GetMapping("/refresh")
	// public ApiResponse refreshToken(HttpServletRequest request, HttpServletResponse response) {
	// 	// access token 확인
	// 	String accessToken = HeaderUtil.getAccessToken(request);
	// 	AuthToken authToken = tokenProvider.convertAuthToken(accessToken);
	// 	if (!authToken.validate()) {
	// 		return ApiResponse.invalidAccessToken();
	// 	}
	//
	// 	// expired access token 인지 확인
	// 	Claims claims = authToken.getExpiredTokenClaims();
	// 	if (claims == null) {
	// 		return ApiResponse.notExpiredTokenYet();
	// 	}
	//
	// 	String userId = claims.getSubject();
	// 	UserRole userRole = UserRole.of(claims.get("role", String.class));
	//
	// 	// refresh token
	// 	String refreshToken = CookieUtil.getCookie(request, REFRESH_TOKEN)
	// 		.map(Cookie::getValue)
	// 		.orElse((null));
	// 	AuthToken authRefreshToken = tokenProvider.convertAuthToken(refreshToken);
	//
	// 	if (authRefreshToken.validate()) {
	// 		return ApiResponse.invalidRefreshToken();
	// 	}
	//
	// 	// userId refresh token 으로 DB 확인
	// 	UserRefreshToken userRefreshToken = userRefreshTokenRepository.findByUserIdAndRefreshToken(userId,
	// 		refreshToken);
	// 	if (userRefreshToken == null) {
	// 		return ApiResponse.invalidRefreshToken();
	// 	}
	//
	// 	Date now = new Date();
	// 	AuthToken newAccessToken = tokenProvider.createAuthToken(
	// 		userId,
	// 		userRole.getCode(),
	// 		new Date(now.getTime() + appProperties.getAuth().getTokenExpiry())
	// 	);
	//
	// 	long validTime = authRefreshToken.getTokenClaims().getExpiration().getTime() - now.getTime();
	//
	// 	// refresh 토큰 기간이 3일 이하로 남은 경우, refresh 토큰 갱신
	// 	if (validTime <= THREE_DAYS_MSEC) {
	// 		// refresh 토큰 설정
	// 		long refreshTokenExpiry = appProperties.getAuth().getRefreshTokenExpiry();
	//
	// 		authRefreshToken = tokenProvider.createAuthToken(
	// 			appProperties.getAuth().getTokenSecret(),
	// 			new Date(now.getTime() + refreshTokenExpiry)
	// 		);
	//
	// 		// DB에 refresh 토큰 업데이트
	// 		userRefreshToken.setRefreshToken(authRefreshToken.getToken());
	//
	// 		int cookieMaxAge = (int)refreshTokenExpiry / 60;
	// 		CookieUtil.deleteCookie(request, response, REFRESH_TOKEN);
	// 		CookieUtil.addCookie(response, REFRESH_TOKEN, authRefreshToken.getToken(), cookieMaxAge);
	// 	}
	//
	// 	return ApiResponse.success("token", newAccessToken.getToken());
	// }

	@PostMapping("/login")
	public ResponseEntity<JwtTokenDto> login(@RequestBody @Validated LoginRequestDto request) {
		log.debug("AuthController - email : " + request.getEmail());

		return ResponseEntity.ok(
			authService.login(request.getEmail(), request.getPassword()));
	}

	@PostMapping("/refresh")
	public ResponseEntity<JwtToken> refresh(@RequestBody @Validated TokenReIssueRequest request) {
		return ResponseEntity.ok(authService.refresh(request.getRefreshToken()));
	}

	@GetMapping("/home")
	public String home() {
		return "<h1>home</h1>";
	}

	// Tip : JWT를 사용하면 UserDetailsService를 호출하지 않기 때문에 @AuthenticationPrincipal 사용
	// 불가능.
	// 왜냐하면 @AuthenticationPrincipal은 UserDetailsService에서 리턴될 때 만들어지기 때문이다.

	// 유저 혹은 매니저 혹은 어드민이 접근 가능
	// @GetMapping("/user")
	// public String user(Authentication authentication) {
	// 	PrincipalDetails principal = (PrincipalDetails)authentication.getPrincipal();
	// 	System.out.println("principal : " + principal.getUser().getUserId());
	// 	System.out.println("principal : " + principal.getUser().getUserNickname());
	// 	System.out.println("principal : " + principal.getUser().getUserPassword());
	//
	// 	return "<h1>user</h1>";
	// }

	// 매니저 혹은 어드민이 접근 가능
	// @GetMapping("/manager/reports")
	// public String reports() {
	// 	return "<h1>reports</h1>";
	// }

	// 어드민이 접근 가능
	// @GetMapping("/admin/users")
	// public List<User> users() {
	// 	return userRepository.findAll();
	// }

	// @PostMapping("/signup")
	// public ResponseEntity<?> signup(@RequestBody SignupRequestDto user) {
	// 	return ResponseEntity.ok(userService.createUser(user));
	// }

}
