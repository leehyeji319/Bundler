package com.ssafy.bundler.domain;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.DiscriminatorColumn;
import jakarta.persistence.DiscriminatorType;
import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Inheritance;
import jakarta.persistence.InheritanceType;
import jakarta.persistence.PrimaryKeyJoinColumn;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.SuperBuilder;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "CARDS")
@SuperBuilder(toBuilder = true)
@DiscriminatorValue(value = "CARD")
@PrimaryKeyJoinColumn(name = "card_id")
@Inheritance(strategy = InheritanceType.JOINED)
@DiscriminatorColumn(name = "card_type", discriminatorType = DiscriminatorType.STRING)
public class Card extends Feed implements Serializable {

	@Column(name = "card_id", insertable = false, updatable = false)
	private Long cardId;

	@Column(name = "card_scrap_cnt")
	private int cardScrapCnt;

	@Column(name = "card_description")
	private String cardDescription;

	@Column(name = "card_commentary")
	private String cardCommentary;

	@Column(name = "card_type")
	@Enumerated(EnumType.STRING)
	private CardType cardType;
	
	//==== 비즈니스 로직 ====//
	public void addCardScrapCnt() {
		this.cardScrapCnt++;
	}

}
