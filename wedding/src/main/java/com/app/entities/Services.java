package com.app.entities;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.*;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "service")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Data
public class Services extends BaseEntity{

	@OneToOne
	@JoinColumn(name = "vanue_id",nullable = true)
	private Vanue vanueId;
	
	@OneToOne
	@JoinColumn(name = "makeup_id",nullable = true)
	private MakeUp makeUpId;
	
	@OneToOne
	@JoinColumn(name = "dacouration_id",nullable = true)
	private Decoration dacourationId;
	
	@OneToOne
	@JoinColumn(name = "food_id",nullable = true)
	private Food foodId;
	
	@OneToOne
	@JoinColumn(name = "photo_id",nullable = true)
	private Photo photoId;
	
	@OneToOne
	@JoinColumn(name = "sound_id",nullable = true)
	private Sound soundId;
	
	@OneToOne
	@JoinColumn(name = "gift_id",nullable = true)
	private InvitesGift giftId;
	
	@OneToOne
	@JoinColumn(name = "mehandi_id",nullable = true)
	private Mehandi mehandiId;
	
}
