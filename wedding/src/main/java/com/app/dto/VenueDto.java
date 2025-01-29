package com.app.dto;



import com.app.entities.UserEntity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Data
@ToString
public class VenueDto {

	private String Name;

	private String type;

	private Integer capacity;

	private String city;

	private Integer room;

	private String address;

	private Boolean status;

	private String discription;

	private int rating;
	private int price;

	private UserEntity userEntity;
}
