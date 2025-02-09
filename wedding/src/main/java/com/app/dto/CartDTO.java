package com.app.dto;

import com.app.entities.UserEntity;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class CartDTO {
	
	private String name;
	private int quantity;

}
