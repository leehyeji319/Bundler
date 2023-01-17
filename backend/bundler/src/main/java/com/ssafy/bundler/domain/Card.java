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
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Card {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "user_id")
	private Long id;

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

	//
	// private UserCardHit userCardHit;

}
