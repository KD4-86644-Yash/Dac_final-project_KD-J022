package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.InvitesGiftDto;
import com.app.dto.MehandiDto;
import com.app.service.InvitationsAndGiftsService;

@RestController
@RequestMapping("/invitations")
@CrossOrigin

public class InvitationsAndGiftsController {
	
	@Autowired
	private InvitationsAndGiftsService invitationsAndGiftsService;
	
	@GetMapping
	ResponseEntity<?> getList(){
		
		List<InvitesGiftDto> invitesList = invitationsAndGiftsService.getAllList();
		if(invitesList.isEmpty())
			return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
		return ResponseEntity.ok(invitesList);
	}
	
	
	@PostMapping("/add-invitations-and-gifts")
	public  ResponseEntity<?> addProduct(@RequestBody   InvitesGiftDto invites) {
		return ResponseEntity.status(HttpStatus.CREATED)
				.body(invitationsAndGiftsService.addInvitationAndGiftService(invites)); 	
	}

}
