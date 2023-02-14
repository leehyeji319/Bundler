package com.ssafy.bundler.domain;

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
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "COMMENTS", uniqueConstraints = @UniqueConstraint(columnNames = {"feed_id", "user_id"}))
@SuperBuilder
public class Comment extends BaseEntity implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "comment_id")
	private Long commentId;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "writer_id")
	private User writer;

	@Column(name = "comment_content")
	private String commentContent; // 댓글 내용

	public void updateContent(String commentContent) {
		this.commentContent = commentContent;
	}

}
