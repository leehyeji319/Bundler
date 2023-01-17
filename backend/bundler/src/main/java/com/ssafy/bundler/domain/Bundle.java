package com.ssafy.bundler.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter @Setter
@Entity
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

}
