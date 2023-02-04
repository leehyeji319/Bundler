package com.ssafy.bundler.dto.bundle.response;

import java.time.LocalDateTime;
import java.util.List;

import lombok.Data;
import lombok.RequiredArgsConstructor;

@Data
@RequiredArgsConstructor
public class BundleResponseDto {

	private Long bundleId;
	// private String feedType;

	private LocalDateTime createdAt;

	private Long bundleWriterId;
	private String bundleWriterProfileImage;
	private String bundleWriterNickname;

	private String feedTitle;
	private String feedContent;

	private String bundleThumbnail;
	private String bundleThumbnailText;

	List<CardBundleQueryDto> cardBundleQueryDtoList;
	List<CardBundleQueryDto> cardBundleQuerySampleDtoList;

	public BundleResponseDto(Long bundleId, LocalDateTime createdAt, Long bundleWriterId,
		String bundleWriterProfileImage, String bundleWriterNickname, String feedTitle, String feedContent,
		String bundleThumbnail, String bundleThumbnailText) {
		this.bundleId = bundleId;
		this.createdAt = createdAt;
		this.bundleWriterId = bundleWriterId;
		this.bundleWriterProfileImage = bundleWriterProfileImage;
		this.bundleWriterNickname = bundleWriterNickname;
		this.feedTitle = feedTitle;
		this.feedContent = feedContent;
		this.bundleThumbnail = bundleThumbnail;
		this.bundleThumbnailText = bundleThumbnailText;
	}

}
