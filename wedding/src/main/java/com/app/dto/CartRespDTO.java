package com.app.dto;

import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Data
public class CartRespDTO {
	
	private String Name;
	
	private int quantity;
	
	private int price;

}
