package com.ssafy.bundler.domain;

import jakarta.persistence.*;
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

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "user_id")
    private Bundle bundle;

}
