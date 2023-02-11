package com.ssafy.bundler.service;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.ssafy.bundler.config.auth.UserPrincipal;
import com.ssafy.bundler.domain.User;
import com.ssafy.bundler.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CustomUserDetailsService implements UserDetailsService {

	private final UserRepository userRepository;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User user = userRepository.findOneByUserNickname(username).orElseThrow();
		if (user == null) {
			throw new UsernameNotFoundException("Can not find username.");
		}
		return UserPrincipal.create(user);
	}

}
