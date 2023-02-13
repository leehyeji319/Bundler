package com.ssafy.bundler.repository;

import java.util.Arrays;

import org.springframework.security.oauth2.client.web.AuthorizationRequestRepository;
import org.springframework.security.oauth2.core.endpoint.OAuth2AuthorizationRequest;

import com.nimbusds.oauth2.sdk.util.StringUtils;
import com.ssafy.bundler.util.CookieUtil;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;

@Slf4j
public class OAuth2AuthorizationRequestBasedOnCookieRepository
	implements AuthorizationRequestRepository<OAuth2AuthorizationRequest> {

	public final static String OAUTH2_AUTHORIZATION_REQUEST_COOKIE_NAME = "oauth2_auth_request";
	public final static String REDIRECT_URI_PARAM_COOKIE_NAME = "redirect_uri";
	public final static String REFRESH_TOKEN = "refreshToken";
	private final static int cookieExpireSeconds = 180;

	@Override
	public OAuth2AuthorizationRequest loadAuthorizationRequest(HttpServletRequest request) {
		/////////////////////////////
		log.info(" loadAuthorizationRequest()!!");

		log.info("request의 getRequestURI: " + request.getRequestURI());
		log.info("request의 getMethod: " + request.getMethod());
		log.info("request의 getParameter(code): " + request.getParameter("code"));
		log.info("request의 getMetgetParameter(state): " + request.getParameter("state"));

		Arrays.stream(request.getCookies()).forEach(cookie -> log.info(cookie.getName() + ": " + cookie.getValue()));
		// log.info("request의 getPathInfo: " + request.getPathInfo());

		/////////////////////////////
		return CookieUtil.getCookie(request, OAUTH2_AUTHORIZATION_REQUEST_COOKIE_NAME)
			.map(cookie -> CookieUtil.deserialize(cookie, OAuth2AuthorizationRequest.class))
			.orElseThrow();
	}

	@Override
	public void saveAuthorizationRequest(OAuth2AuthorizationRequest authorizationRequest, HttpServletRequest request,
		HttpServletResponse response) {
		if (authorizationRequest == null) {
			CookieUtil.deleteCookie(request, response, OAUTH2_AUTHORIZATION_REQUEST_COOKIE_NAME);
			CookieUtil.deleteCookie(request, response, REDIRECT_URI_PARAM_COOKIE_NAME);
			CookieUtil.deleteCookie(request, response, REFRESH_TOKEN);
			return;
		}

		log.info("saveAuthorizationRequest() !!!");
		log.info(
			"authorizationRequest - getAuthorizationRequestUri: " + authorizationRequest.getAuthorizationRequestUri());
		log.info("authorizationRequest - getAuthorizationUri: " + authorizationRequest);

		log.info("authorizationRequest - getAuthorizationUri: " + authorizationRequest.getAuthorizationUri());
		log.info("authorizationRequest - getRedirectUri: " + authorizationRequest.getRedirectUri());
		log.info("authorizationRequest - getClientId: " + authorizationRequest.getClientId());
		log.info("authorizationRequest - getAttributes: " + authorizationRequest.getAttributes());

		// response.addCookie(new Cookie(OAUTH2_AUTHORIZATION_REQUEST_COOKIE_NAME, authorizationRequest));
		CookieUtil.addCookie(response, OAUTH2_AUTHORIZATION_REQUEST_COOKIE_NAME,
			CookieUtil.serialize(authorizationRequest), cookieExpireSeconds);
		String redirectUriAfterLogin = request.getParameter(REDIRECT_URI_PARAM_COOKIE_NAME);

		log.info("authorizationRequest : " + CookieUtil.serialize(authorizationRequest));
		// log.info("HttpServletRequest : " + CookieUtil.serialize(request));
		// log.info("HttpServletResponse : " + CookieUtil.serialize(response));

		if (StringUtils.isNotBlank(redirectUriAfterLogin)) {
			CookieUtil.addCookie(response, REDIRECT_URI_PARAM_COOKIE_NAME, redirectUriAfterLogin, cookieExpireSeconds);
		}
	}

	@Override
	public OAuth2AuthorizationRequest removeAuthorizationRequest(HttpServletRequest request,
		HttpServletResponse response) {
		return this.loadAuthorizationRequest(request);
	}

	public void removeAuthorizationRequestCookies(HttpServletRequest request, HttpServletResponse response) {
		CookieUtil.deleteCookie(request, response, OAUTH2_AUTHORIZATION_REQUEST_COOKIE_NAME);
		CookieUtil.deleteCookie(request, response, REDIRECT_URI_PARAM_COOKIE_NAME);
		CookieUtil.deleteCookie(request, response, REFRESH_TOKEN);
	}
}
