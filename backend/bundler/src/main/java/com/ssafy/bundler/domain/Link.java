package com.ssafy.bundler.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Entity
@NoArgsConstructor
public class Link {

	@Id
	@GeneratedValue
	@Column(name = "link_id")
	private Long linkId;

	@Column(name = "link_url")
	private String linkUrl;

	@Column(name = "link_image")
	private String linkImage;
	@Column(name = "link_title")
	private String linkTitle;

	@Column(name = "link_description")
	private String linkDescription;

	@Builder
	public Link(String linkUrl, String linkImage, String linkTitle, String linkDescription) {
		this.linkUrl = linkUrl;
		this.linkImage = linkImage;
		this.linkTitle = linkTitle;
		this.linkDescription = linkDescription;
	}
}
