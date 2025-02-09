package com.app.entities;

import java.security.Provider.Service;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "cart")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Cart extends BaseEntity{
	
	@Column(length = 20)
	private String Name;
	
	private int quantity;
	
	private int price;
	
	@Column(name = "user_id")
	private Long userId;

	@Column(name = "serrvice_id")
	private Long service;



}
