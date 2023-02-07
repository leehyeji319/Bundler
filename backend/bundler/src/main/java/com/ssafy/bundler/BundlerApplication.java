package com.ssafy.bundler;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing
@SpringBootApplication
public class BundlerApplication {

	public static void main(String[] args) {
		SpringApplication.run(BundlerApplication.class, args);

	}

}
