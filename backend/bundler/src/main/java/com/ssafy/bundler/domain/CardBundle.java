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
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import static jakarta.persistence.FetchType.LAZY;

@Getter @Setter
@Entity
public class CardBundle {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "feed_id", nullable = false)
    private Card card;

	@Column(name = "card_id")
	private Long cardId;

	@ManyToOne(fetch = LAZY)
	@JoinColumn(name = "card_id", insertable = false, updatable = false)
	private Card card;

	@ManyToOne(fetch = LAZY)
	@JoinColumn(name = "bundle_id", insertable = false, updatable = false)
	private Bundle bundle;

	@Builder
	public CardBundle(Long bundleId, Long cardId) {
		this.bundleId = bundleId;
		this.cardId = cardId;
	}

}
