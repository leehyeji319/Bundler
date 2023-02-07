package com.ssafy.bundler.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Follow extends BaseEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "follow_id")
	private Long followId;

	@ManyToOne
	// @Column(name = "follow_to_id")
	@JoinColumn(name = "follow_to_id")
	private User followTo;

	@ManyToOne
	// @Column(name = "follow_from_id")
	@JoinColumn(name = "follow_from_id")
	private User followFrom;

}
