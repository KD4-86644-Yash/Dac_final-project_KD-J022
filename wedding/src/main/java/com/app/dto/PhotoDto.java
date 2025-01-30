package com.app.dto;

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
public class PhotoDto {
	private String Name;
	private String type;
	private String city;
	private String duration;
	private Boolean status;
	private String discription;
	private int rating;
	private int price;
	private String vendorEmail;
}
