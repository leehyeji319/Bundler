package com.ssafy.bundler.service;

import java.time.LocalDateTime;

import org.springframework.security.authentication.InternalAuthenticationServiceException;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

import com.ssafy.bundler.config.auth.UserPrincipal;
import com.ssafy.bundler.config.oauthUserInfo.OAuth2UserInfoFactory;
import com.ssafy.bundler.config.oauthUserInfo.provider.OAuth2UserInfo;
import com.ssafy.bundler.domain.ProviderType;
import com.ssafy.bundler.domain.RoleType;
import com.ssafy.bundler.domain.User;
import com.ssafy.bundler.exception.OAuthProviderMissMatchException;
import com.ssafy.bundler.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CustomOAuth2UserService extends DefaultOAuth2UserService {

	private final UserRepository userRepository;

	@Override
	public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
		OAuth2User user = super.loadUser(userRequest);

		try {
			return this.process(userRequest, user);
		} catch (AuthenticationException ex) {
			throw ex;
		} catch (Exception ex) {
			ex.printStackTrace();
			throw new InternalAuthenticationServiceException(ex.getMessage(), ex.getCause());
		}
	}

	private OAuth2User process(OAuth2UserRequest userRequest, OAuth2User user) {
		ProviderType providerType = ProviderType.valueOf(
			userRequest.getClientRegistration().getRegistrationId().toUpperCase());

		OAuth2UserInfo userInfo = OAuth2UserInfoFactory.getOAuth2UserInfo(providerType, user.getAttributes());
		User savedUser = userRepository.findByUserId(userInfo.getId());

		if (savedUser != null) {
			if (providerType != savedUser.getProviderType()) {
				throw new OAuthProviderMissMatchException(
					"Looks like you're signed up with " + providerType +
						" account. Please use your " + savedUser.getProviderType() + " account to login."
				);
			}
			updateUser(savedUser, userInfo);
		} else {
			savedUser = createUser(userInfo, providerType);
		}

		return UserPrincipal.create(savedUser, user.getAttributes());
	}

	@SuppressWarnings("checkstyle:RegexpMultiline")
	private User createUser(OAuth2UserInfo userInfo, ProviderType providerType) {
		LocalDateTime now = LocalDateTime.now();
		User user = User.builder()
			.userNickname(userInfo.getId())
			// .userNickname(userInfo.getName())
			.userEmail(userInfo.getEmail())
			.userProfileImage(userInfo.getImageUrl())
			.providerType(providerType)
			.userRole(RoleType.USER)
			.build();

		return userRepository.saveAndFlush(user);
	}

	private User updateUser(User user, OAuth2UserInfo userInfo) {
		// if (userInfo.getName() != null && !user.getUsername().equals(userInfo.getName())) {
		// 	user.setUsername(userInfo.getName());
		// }

		if (userInfo.getImageUrl() != null && !user.getUserProfileImage().equals(userInfo.getImageUrl())) {
			user.toBuilder()
				.userProfileImage(userInfo.getImageUrl());
		}

		return user;
	}
}
