package com.ssafy.bundler.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.bundler.config.auth.PrincipalDetails;
import com.ssafy.bundler.service.UserService;

@RestController
@RequestMapping("/api/v1/auth/user")
public class UserController {

	@Autowired
	private UserService userService;

	@GetMapping
	public String user(Authentication authentication) {
		PrincipalDetails principal = (PrincipalDetails)authentication.getPrincipal();
		System.out.println("principal : " + principal.getUser().getUserId());
		System.out.println("principal : " + principal.getUser().getUserNickname());
		System.out.println("principal : " + principal.getUser().getUserPassword());

		return "<h1>user</h1>";
	}

}
