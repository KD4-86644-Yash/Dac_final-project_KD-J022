package com.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "secure_users")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Data
public class Food extends BaseEntity{
	
	@Column(length = 20)
	private String Name;
	@Column(length = 300)
	private String city;
	@Column(length = 100)
	private Boolean status;
	@Column(length = 500)
	private String discription;
	@Column(length = 500)
	private int rating;
	@Column(length = 500)
	private int price;
	
	@ManyToOne
	@JoinColumn(name = "vandor_id")
	private UserEntity userEntity;

}
