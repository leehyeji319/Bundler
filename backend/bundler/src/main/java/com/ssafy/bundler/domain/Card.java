package com.ssafy.bundler.domain;

import static jakarta.persistence.CascadeType.*;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.annotations.NaturalId;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Entity
@NoArgsConstructor
public class Card {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "card_id")
	private Long cardId;

	private int scrapCnt;

	private String description;

	private String commentary;

	@Enumerated(EnumType.STRING)
	@NaturalId
	private CardType cardType;

	@OneToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	@JoinColumn(name = "link_id")
	private Link link;

	@OneToMany(cascade = ALL)
	@JoinColumn(name = "user_card_id")
	private List<UserCardHit> userCardHitList = new ArrayList<>();

	@Builder
	public Card(int scrapCnt, String description, String commentary,
		CardType cardType, Link link, List<UserCardHit> userCardHitList) {
		this.scrapCnt = scrapCnt;
		this.description = description;
		this.commentary = commentary;
		this.cardType = cardType;
		this.link = link;
		this.userCardHitList = userCardHitList;
	}
}
