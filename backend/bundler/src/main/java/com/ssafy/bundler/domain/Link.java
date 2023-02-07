package com.ssafy.bundler.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@Entity
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

}
