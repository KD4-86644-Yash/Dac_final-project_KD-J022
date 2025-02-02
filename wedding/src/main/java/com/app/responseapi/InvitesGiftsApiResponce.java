package com.app.responseapi;

import java.util.List;

import org.springframework.http.HttpStatus;

import com.app.dto.InvitesGiftDto;
import com.app.dto.SoundDto;
import com.app.dto.VenueDto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class InvitesGiftsApiResponce {
	private InvitesGiftDto invitesGiftDto;
	private List<InvitesGiftDto> invitesGiftDtos;
	private HttpStatus status;
	private String message;
	private boolean error;
}
