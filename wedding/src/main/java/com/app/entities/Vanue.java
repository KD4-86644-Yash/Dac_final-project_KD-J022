package com.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "vanue")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Data
@ToString
public class Vanue extends BaseEntity{

	@Column(length = 20)
	private String Name;
	@Column(length = 20)
	private String type;
	@Column(length = 30)
	private Integer capacity;
	@Column(length = 300)
	private String city;
	@Column(length = 30)
	private Integer room;
	@Column(length = 100)
	private String address;
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
