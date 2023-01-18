package com.ssafy.bundler.domain;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Entity
@NoArgsConstructor
public class Bundle {

	@Id
	@GeneratedValue
	@Column(name = "bundle_id")
	private Long bundleId;

	@Column(name = "bundle_thumbnail")
	private String bundleThumbnail;

	@Column(name = "bundle_thumbnail_text")
	private String bundleThumbnailText;

	@Column(name = "bundle_is_public")
	private boolean isBundlePublic;

	@OneToMany(mappedBy = "bundle", cascade = CascadeType.ALL)
	private List<CardBundle> cardBundleList = new ArrayList<>();

	@Builder
	public Bundle(String bundleThumbnail, String bundleThumbnailText, boolean isBundlePublic,
		List<CardBundle> cardBundleList) {
		this.bundleThumbnail = bundleThumbnail;
		this.bundleThumbnailText = bundleThumbnailText;
		this.isBundlePublic = isBundlePublic;
		this.cardBundleList = cardBundleList;
	}
}
