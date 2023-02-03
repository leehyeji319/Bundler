package com.ssafy.bundler.dto.bundle;

import lombok.Data;

@Data
public class BundleScrapRequestDto {

	private Long userId;
	private Long cardId;
	private Long bundleId;

}
