package com.app.service;

import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.app.dto.VenueDto;
import com.app.entities.UserEntity;
import com.app.entities.Venue;
import com.app.repository.UserEntityRepository;
import com.app.repository.VenueRepository;
import com.app.responseapi.VenueApiResponce;

import lombok.extern.slf4j.Slf4j;
@Slf4j
@Service
public class VendorServiceImpl implements VendorService{
	
	@Autowired
	public VenueRepository venueRepository;
	
	@Autowired
	public UserEntityRepository userEntityRepository;
	
	@Autowired
	public ModelMapper mapper;

	@Override
	public VenueApiResponce addVenue(VenueDto venueDto, Long vendorId) {
		log.info("vv1="+venueDto.getName());
		try {
			Optional<UserEntity> userEntity = userEntityRepository.findById(vendorId);
			log.info( userEntity.get().getFirstName());
			Venue vanue = mapper.map(venueDto, Venue.class);
			log.info("vv2="+venueDto.getName());
			vanue.setName(venueDto.getName());
			vanue.setAddress(venueDto.getAddress());
			vanue.setCapacity(venueDto.getCapacity());
			vanue.setCity(venueDto.getCity());
			vanue.setDiscription(venueDto.getDiscription());
			vanue.setPrice(venueDto.getPrice());
			vanue.setRoom(venueDto.getRoom());
			vanue.setType(venueDto.getType());
			vanue.getUserEntity().setId(vendorId);
			
			log.info(vanue.getName());
			

			venueRepository.save(vanue);
			VenueDto saveToVenueDto =  mapper.map(vanue, VenueDto.class);
			log.info(saveToVenueDto.getName());
			return new VenueApiResponce(saveToVenueDto,null,HttpStatus.CREATED, "sprintData add successfully",false);
			
		} catch (Exception e) {
			// TODO: handle exception
		}
		return new VenueApiResponce(null,null,HttpStatus.INTERNAL_SERVER_ERROR, "error",true);
		
	}
}
