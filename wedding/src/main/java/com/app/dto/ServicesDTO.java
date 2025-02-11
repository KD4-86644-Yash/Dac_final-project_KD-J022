package com.app.dto;

import java.util.List;

import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

import com.app.entities.Decoration;
import com.app.entities.Food;
import com.app.entities.InvitesGift;
import com.app.entities.MakeUp;
import com.app.entities.Mehandi;
import com.app.entities.Photo;
import com.app.entities.Sound;
import com.app.entities.Venue;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Data
public class ServicesDTO {
	
	private List<Object> services;
//	
//	private List<Venue> venueId;
//	private List<MakeUp> makeUpId;
//	private List<Decoration> dacourationId;
//	private List<Food> foodId;
//	private List<Photo> photoId;
//	private List<Sound> soundId;
//	private List<InvitesGift> giftId;
//	private List<Mehandi> mehandiId;
//	
}
