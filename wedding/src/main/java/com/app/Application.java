package com.app;

import org.modelmapper.Conditions;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
//@ComponentScan(basePackages = { "org.springframework.mail.javamail.JavaMailSender" })

@SpringBootApplication
public class Application {

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}
	//configure 3rd party ModelMapper bean for the conversion
	@Bean // equivalent to <bean id ..../> in xml file
	public ModelMapper mapper() {
		ModelMapper modelMapper = new ModelMapper();		modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT)
	.setPropertyCondition(Conditions.isNotNull());
		return modelMapper;
	}
	//configure password encoder bean as depcy for DaoAuthProvider
	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
	
}
