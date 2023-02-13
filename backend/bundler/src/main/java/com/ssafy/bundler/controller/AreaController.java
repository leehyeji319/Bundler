package com.ssafy.bundler.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.bundler.domain.Area;
import com.ssafy.bundler.service.AreaService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/area")
public class AreaController {
	private final AreaService areaService;
	@GetMapping(value = "/{userId}")
	public ResponseEntity<?> get(@PathVariable("userId") Long userId){
		Area area =  areaService.getArea(userId);
		return ResponseEntity.ok(area);
	}
	@PostMapping
	public ResponseEntity<?> post(@RequestBody Area area){
		areaService.create(area);
		return ResponseEntity.ok("created");
	}
}
