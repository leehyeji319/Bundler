package com.ssafy.bundler.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.SuperBuilder;

@Getter
@Setter
@NoArgsConstructor
@SuperBuilder(toBuilder = true)
@Entity
public class Category {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "user_id")
	private Long id;

	private String name;

	@OneToMany(mappedBy = "category", cascade = CascadeType.ALL)
	@Builder.Default
	private List<Card> cardList = new ArrayList<>();

	@ManyToOne(fetch = LAZY)
	@JoinColumn(name = "parent_id")
	private Category parent;

	@Builder.Default
	@OneToMany(mappedBy = "parent") //셀프의 연관관계를 건거라고 생각하면 된다.
	private List<Category> child = new ArrayList<>();

	//==연관관계 편이 메서드==// parent니까 셀프
	public void addChildCategory(Category child) {
		this.child.add(child);
		child.setParent(this);
	}
}
