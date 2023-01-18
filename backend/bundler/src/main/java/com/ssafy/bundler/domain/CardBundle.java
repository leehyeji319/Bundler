package com.ssafy.bundler.domain;

import static jakarta.persistence.FetchType.*;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity
@NoArgsConstructor
public class CardBundle {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@ManyToOne(fetch = LAZY)
	@JoinColumn(name = "feed_id", nullable = false)
	private Card card;

	@ManyToOne(fetch = LAZY)
	@JoinColumn(name = "user_id")
	private Bundle bundle;

	@Builder
	public CardBundle(Card card, Bundle bundle) {
		this.card = card;
		this.bundle = bundle;
	}
}
