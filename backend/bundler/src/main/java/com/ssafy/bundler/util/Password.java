package com.ssafy.bundler.util;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public final class Password {

	private static final BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();

	public static String encrypt(String password) {
		return bCryptPasswordEncoder.encode(password);
	}

}
