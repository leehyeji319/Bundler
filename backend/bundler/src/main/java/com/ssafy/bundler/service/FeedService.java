package com.ssafy.bundler.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ssafy.bundler.repository.BundleRepository;
import com.ssafy.bundler.repository.CardRepository;
import com.ssafy.bundler.repository.FeedRepository;
import com.ssafy.bundler.repository.LinkRepository;

import lombok.RequiredArgsConstructor;

/**
 * 카드 조회
 *
 * @author 이혜지
 * @version 1.0
 */

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class FeedService {

	private final FeedRepository feedRepository;
	private final CardRepository cardRepository;
	private final BundleRepository bundleRepository;
	private final LinkRepository linkRepository;

	//번들 조회

	//번들 리스트 조회

}
