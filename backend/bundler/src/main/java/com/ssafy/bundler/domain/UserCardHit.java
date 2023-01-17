package com.ssafy.bundler.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class UserCardHit {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "user_card_id")
	private Long userCardId;

	@Column(name = "card_id")
	private Long cardId;

	@Column(name = "user_id")
	private Long userId;

	@Column(name = "user_submit")
	private String userSubmit;

}
