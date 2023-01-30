package com.ssafy.bundler.domain;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "CARD_BUNDLE", uniqueConstraints = @UniqueConstraint(columnNames = {"bundle_id", "card_id"}))
@NoArgsConstructor
public class CardBundle implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "card_bundle_id")
	private Long cardBundleId;

	@Column(name = "bundle_id")
	private Long bundleId;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "card_id")
	private Card card;

	// @ManyToOne(fetch = LAZY)
	// @JoinColumn(name = "user_id")
	// private Bundle bundle;

	@Builder
	public CardBundle(Long bundleId, Card card) {
		this.bundleId = bundleId;
		this.card = card;
	}

}
