package com.ssafy.bundler.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.bundler.dto.user.SignupRequestDto;
import com.ssafy.bundler.service.UserService;

@RestController
@RequestMapping("/api/v1/auth")
// @RequiredArgsConstructor
public class AuthController {

	@Autowired
	private UserService userService;

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

	@PostMapping("/signup")
	public ResponseEntity<?> signup(@RequestBody SignupRequestDto user) {
		return ResponseEntity.ok(userService.createUser(user));
	}

}
