package com.ssafy.bundler.domain;

import static jakarta.persistence.FetchType.*;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.SuperBuilder;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "FOLLOWS")
@SuperBuilder(toBuilder = true)
public class Follow extends BaseEntity implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "follow_id")
	private Long followId;

	@ManyToOne(fetch = LAZY)
	@JoinColumn(name = "follow_to_id")
	private User followTo;

	@ManyToOne(fetch = LAZY)
	@JoinColumn(name = "follow_from_id")
	private User followFrom;

	// @Builder
	public Follow(User followTo, User followFrom) {
		this.followTo = followTo;
		this.followFrom = followFrom;
	}

}
