package com.app.dto;

import javax.persistence.Column;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.app.entities.BaseEntity;
import com.app.entities.UserEntity;

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
public class SoundDto{
	private int id;
	private String name;
	private String type;
	private String city;
	private String duration;
	private Boolean status;
	private String discription;
	private int rating;
	private int price;
	private String userEntity;
}
