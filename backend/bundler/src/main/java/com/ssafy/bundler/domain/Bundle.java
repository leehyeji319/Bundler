package com.ssafy.bundler.domain;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.PrimaryKeyJoinColumn;
import jakarta.persistence.Table;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.SuperBuilder;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "BUNDLES")
@DiscriminatorValue(value = "BUNDLE")
@PrimaryKeyJoinColumn(name = "bundle_id")
@SuperBuilder(toBuilder = true)
public class Bundle extends Feed implements Serializable {

	@Column(name = "bundle_id", insertable = false, updatable = false)
	private Long bundleId;

	@Column(name = "bundle_thumbnail")
	private String bundleThumbnail;

	@Column(name = "bundle_thumbnail_text")
	private String bundleThumbnailText;

	@Column(name = "bundle_is_public")
	private boolean isBundlePublic;

	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "bundle_id")
	@Builder.Default
	private List<CardBundle> cardList = new ArrayList<>();

}
