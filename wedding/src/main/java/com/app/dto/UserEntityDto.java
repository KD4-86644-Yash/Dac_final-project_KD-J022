package com.app.dto;

import javax.persistence.Column;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;

import com.app.entities.UserEntity;
import com.app.entities.UserRole;

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
public class UserEntityDto {
	private String firstName;
	private String lastName;
	private String email;
	private String password;
//	@Enumerated(EnumType.STRING)
//	@Column(length = 30)
	private UserRole role;
}
