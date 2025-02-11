package com.app.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.CartDTO;
import com.app.dto.InvitesGiftDto;
import com.app.dto.MehandiDto;
import com.app.entities.InvitesGift;
import com.app.service.InvitationsAndGiftsService;

@RestController
@RequestMapping("/invitations")
@CrossOrigin

public class InvitationsAndGiftsController {
	
	@Autowired
	private InvitationsAndGiftsService invitationsAndGiftsService;
	
	@GetMapping
	public ResponseEntity<?> getList(){
		
		List<InvitesGiftDto> invitesList = invitationsAndGiftsService.getAllList();
		if(invitesList.isEmpty())
			return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
		return ResponseEntity.ok(invitesList);
	}
	
	
	@PostMapping("/add-invitations-and-gifts/{vendorId}")
	public  ResponseEntity<?> addProduct(@RequestBody InvitesGiftDto invites,@PathVariable Long vendorId) {
		return ResponseEntity.status(HttpStatus.CREATED)
				.body(invitationsAndGiftsService.addInvitationAndGiftService(invites,vendorId)); 	
	}
	
	@PostMapping("services/invitations/{user-id}/{service-id}")
	public ResponseEntity<?> addToCart(@RequestBody CartDTO cartDto,@PathVariable ("service-id") Long id,@PathVariable ("user-id") Long userId){
		
		
		return ResponseEntity.status(HttpStatus.CREATED)
				.body(invitationsAndGiftsService.addInvitationAndGiftServiceToCart(cartDto, id, userId));
	}
	
	@GetMapping("/invitations/{user-id}/{service-id}")
	public ResponseEntity<?> getSingleInvitationObject(@PathVariable ("service-id") Long id){
		InvitesGift inviteObject = invitationsAndGiftsService.getSingleInvitationRecord(id);
		return ResponseEntity.ok(inviteObject);
	}
}
