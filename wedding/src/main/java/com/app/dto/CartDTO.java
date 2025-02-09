package com.app.dto;

import java.security.Provider.Service;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@NoArgsConstructor
@Data
//@AllArgsConstructor
public class CartDTO {
	private String name;
	private int price;
	private int quantity;
	private Long serrviceId;
	
	

}
