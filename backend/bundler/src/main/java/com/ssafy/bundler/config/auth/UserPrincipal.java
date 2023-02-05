package com.ssafy.bundler.config.auth;

import java.util.Collection;
import java.util.Collections;
import java.util.Map;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.oauth2.core.oidc.OidcIdToken;
import org.springframework.security.oauth2.core.oidc.OidcUserInfo;
import org.springframework.security.oauth2.core.oidc.user.OidcUser;
import org.springframework.security.oauth2.core.user.OAuth2User;

import com.ssafy.bundler.domain.ProviderType;
import com.ssafy.bundler.domain.RoleType;
import com.ssafy.bundler.domain.User;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@RequiredArgsConstructor
@Builder
public class UserPrincipal implements OAuth2User, UserDetails, OidcUser {
	private final Long userId;
	private final String userNickname;
	private final String password;
	private final ProviderType providerType;
	private final RoleType roleType;
	private final Collection<GrantedAuthority> authorities;
	private Map<String, Object> attributes;

	@Override
	public Map<String, Object> getAttributes() {
		return attributes;
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return authorities;
	}

	@Override
	public String getName() {
		return String.valueOf(this.userId);
	}

	@Override
	public String getUsername() {
		return this.userNickname;
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}

	@Override
	public Map<String, Object> getClaims() {
		return null;
	}

	@Override
	public OidcUserInfo getUserInfo() {
		return null;
	}

	@Override
	public OidcIdToken getIdToken() {
		return null;
	}

	public static UserPrincipal create(User user) {
		// return new UserPrincipal(
		// 	user.getUserId(),
		// 	user.getUserNickname(),
		// 	user.getUserPassword(),
		// 	user.getProviderType(),
		// 	RoleType.USER,
		// 	Collections.singletonList(new SimpleGrantedAuthority(RoleType.USER.getCode()))
		// );

		return UserPrincipal.builder()
			.userId(user.getUserId())
			.userNickname(user.getUserNickname())
			.password(user.getUserPassword())
			.providerType(user.getProviderType())
			.roleType(RoleType.USER)
			.authorities(Collections.singletonList(new SimpleGrantedAuthority(RoleType.USER.getCode())))
			.build();
	}

	public static UserPrincipal create(User user, Map<String, Object> attributes) {
		UserPrincipal userPrincipal = create(user);
		userPrincipal.setAttributes(attributes);

		return userPrincipal;
	}
}
