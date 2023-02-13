package com.ssafy.bundler.controller;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.StringTokenizer;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.bundler.domain.Area;
import com.ssafy.bundler.dto.area.AreaDto;
import com.ssafy.bundler.service.AreaService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/area")
public class AreaController {
	private final AreaService areaService;
	@GetMapping(value = "/{userId}")
	public ResponseEntity<?> get(@PathVariable("userId") Long userId){
		Area userArea =  areaService.getArea(userId);
		Object[] job = getArrayFromString(userArea.getJob());
		Object[] skill = getArrayFromString(userArea.getSkill());
		AreaDto area = new AreaDto(userArea.getUserId(),job,skill);

		return ResponseEntity.ok(area);
	}
	@PostMapping
	public ResponseEntity<?> post(@RequestBody AreaDto area){
		Area newArea  = Area.builder()
			.userId(area.getUserId())
			.job(Arrays.toString(area.getJob()))
			.skill(Arrays.toString(area.getSkill()))
			.build();
		areaService.create(newArea);
		return ResponseEntity.ok("create");
	}

	Object[] getArrayFromString(String str){
		List<String> arr = new ArrayList<>();

		String plain = str.substring(1,str.length()-1);
		StringTokenizer st = new StringTokenizer(plain,", ");

		while(st.hasMoreTokens()){
			arr.add(st.nextToken());
		}

		return arr.toArray();
	}
}
