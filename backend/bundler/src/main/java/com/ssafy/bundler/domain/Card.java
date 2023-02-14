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
import jakarta.persistence.Inheritance;
import jakarta.persistence.InheritanceType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.PrimaryKeyJoinColumn;
import jakarta.persistence.Table;
import jakarta.persistence.Transient;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "CARDS")
@SuperBuilder(toBuilder = true)
@DiscriminatorValue(value = FeedType.Values.CARD)
@PrimaryKeyJoinColumn(name = "card_id")
@Inheritance(strategy = InheritanceType.JOINED)
//엔티티를 저장할 때 구분 컬럼에 입력할 값을 지정한다. 만약 카드 엔티티를 지정하면 구분 컬럼인 DTYPE
// @DiscriminatorColumn("CARD")
@DiscriminatorColumn(name = "card_type", discriminatorType = DiscriminatorType.STRING)
public class Card extends Feed implements Serializable {

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

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "category_id")
	private Category category;

	//==== 비즈니스 로직 ====//
	public void addCardScrapCnt() {
		this.cardScrapCnt++;
	}

	// @Transient
	// @Column(name = "feed_type", insertable = false, updatable = false)
	// protected String feedType;

	@Transient
	@Column(name = "feed_type")
	@Enumerated(EnumType.STRING)
	private FeedType feedType;
}
