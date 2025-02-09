package com.app.service;

import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.app.dto.DecorationDto;
import com.app.dto.FoodDto;
import com.app.dto.InvitesGiftDto;
import com.app.dto.MakeUpDto;
import com.app.dto.PhotoDto;
import com.app.dto.SoundDto;
import com.app.dto.VenueDto;
import com.app.entities.Decoration;
import com.app.entities.Food;
import com.app.entities.InvitesGift;
import com.app.entities.MakeUp;
import com.app.entities.Photo;
import com.app.entities.Sound;
import com.app.entities.UserEntity;
import com.app.entities.Vanue;
import com.app.repository.DecorationRepository;
import com.app.repository.FoodRepository;
import com.app.repository.InvitesGiftsRepository;
import com.app.repository.MakeUpRepository;
import com.app.repository.PhotoRepository;
import com.app.repository.SoundRepository;
import com.app.repository.UserEntityRepository;
import com.app.repository.VenueRepository;
import com.app.responseapi.DecorationApiResponce;
import com.app.responseapi.FoodApiResponce;
import com.app.responseapi.InvitesGiftsApiResponce;
import com.app.responseapi.MakeUpApiResponce;
import com.app.responseapi.PhotoApiResponce;
import com.app.responseapi.SoundApiResponce;
import com.app.responseapi.VenueApiResponce;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class VendorServiceImpl implements VendorService {

	@Autowired
	public VenueRepository venueRepository;

	@Autowired
	public SoundRepository soundRepository;

	@Autowired
	public FoodRepository foodRepository;

	@Autowired
	public DecorationRepository decorationRepository;

	@Autowired
	public PhotoRepository photoRepository;
	@Autowired
	public InvitesGiftsRepository invitesGiftsRepository;
	@Autowired
	public MakeUpRepository makeupRepository;

	@Autowired
	public UserEntityRepository userEntityRepository;

	@Autowired
	public ModelMapper mapper;

	@Override
	public VenueApiResponce addVenue(VenueDto venueDto, Long vendorId) {
		log.info("vv1=" + venueDto.getName());
		try {
			Optional<UserEntity> userEntity = userEntityRepository.findById(vendorId);
			log.info(userEntity.get().getFirstName());
			Vanue vanue = mapper.map(venueDto, Vanue.class);
			log.info("vv2=" + venueDto.getName());
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
			VenueDto saveToVenueDto = mapper.map(vanue, VenueDto.class);
			log.info(saveToVenueDto.getName());
			return new VenueApiResponce(saveToVenueDto, null, HttpStatus.CREATED, "sprintData add successfully", false);

		} catch (Exception e) {
			// TODO: handle exception
		}
		return new VenueApiResponce(null, null, HttpStatus.INTERNAL_SERVER_ERROR, "error", true);

	}

	@Override
	public SoundApiResponce addSound(SoundDto soundDto, Long vendorId) {
		log.info("vv1=" + soundDto.getName());
		try {
			Optional<UserEntity> userEntity = userEntityRepository.findById(vendorId);

			Sound sound = mapper.map(soundDto, Sound.class);
			log.info("vv2=" + soundDto.getName());
			sound.setName(soundDto.getName());
			sound.setStatus(soundDto.getStatus());
			sound.setDuration(soundDto.getDuration());
			sound.setCity(soundDto.getCity());
			sound.setDiscription(soundDto.getDiscription());
			sound.setPrice(soundDto.getPrice());
			sound.setRating(soundDto.getRating());
			sound.setType(soundDto.getType());
			sound.getUserEntity().setId(vendorId);
			log.info(sound.getName());
			soundRepository.save(sound);
			SoundDto saveToVenueDto = mapper.map(sound, SoundDto.class);
			log.info(saveToVenueDto.getName());
			return new SoundApiResponce(saveToVenueDto, null, HttpStatus.CREATED, "Sound add successfully", false);

		} catch (Exception e) {
			// TODO: handle exception
		}
		return new SoundApiResponce(null, null, HttpStatus.INTERNAL_SERVER_ERROR, "error", true);

	}

	@Override
	public FoodApiResponce addFood(FoodDto foodDto, Long vendorId) {
		try {
			Optional<UserEntity> userEntity = userEntityRepository.findById(vendorId);

			Food food = mapper.map(foodDto, Food.class);
			log.info("vv2=" + foodDto.getName());
			food.getUserEntity().setId(vendorId);
			log.info(food.getName());
			foodRepository.save(food);
			FoodDto saveToFoodDto = mapper.map(food, FoodDto.class);
			log.info(saveToFoodDto.getName());
			return new FoodApiResponce(saveToFoodDto, null, HttpStatus.CREATED, "Food add successfully", false);

		} catch (Exception e) {
			// TODO: handle exception
		}
		return new FoodApiResponce(null, null, HttpStatus.INTERNAL_SERVER_ERROR, "error", true);
	}

	@Override
	public DecorationApiResponce addDecoration(DecorationDto decorationDto, Long vendorId) {
		try {
			Optional<UserEntity> userEntity = userEntityRepository.findById(vendorId);

			Decoration decoration = mapper.map(decorationDto, Decoration.class);
			log.info("vv2=" + decorationDto.getName());
			decoration.getUserEntity().setId(vendorId);
			log.info(decoration.getName());
			decorationRepository.save(decoration);
			DecorationDto saveToDecorationDto = mapper.map(decoration, DecorationDto.class);
			log.info(saveToDecorationDto.getName());
			return new DecorationApiResponce(saveToDecorationDto, null, HttpStatus.CREATED,
					"Decoration add successfully", false);

		} catch (Exception e) {
			// TODO: handle exception
		}
		return new DecorationApiResponce(null, null, HttpStatus.INTERNAL_SERVER_ERROR, "error", true);
	}

	@Override
	public InvitesGiftsApiResponce addInvitesGifts(InvitesGiftDto InvitesGiftDto, Long vendorId) {
		try {
			Optional<UserEntity> userEntity = userEntityRepository.findById(vendorId);

			InvitesGift invitesGift = mapper.map(InvitesGiftDto, InvitesGift.class);
			log.info("vv2=" + InvitesGiftDto.getName());
			invitesGift.getUserEntity().setId(vendorId);
			log.info(invitesGift.getName());
			invitesGiftsRepository.save(invitesGift);
			InvitesGiftDto saveToInvitesGiftDto = mapper.map(invitesGift, InvitesGiftDto.class);
			log.info(saveToInvitesGiftDto.getName());
			return new InvitesGiftsApiResponce(saveToInvitesGiftDto, null, HttpStatus.CREATED,
					"InvitesGift add successfully", false);

		} catch (Exception e) {
			// TODO: handle exception
		}
		return new InvitesGiftsApiResponce(null, null, HttpStatus.INTERNAL_SERVER_ERROR, "error", true);
	}

	@Override
	public MakeUpApiResponce addMakeUp(MakeUpDto makeUpDto, Long vendorId) {
		try {
			Optional<UserEntity> userEntity = userEntityRepository.findById(vendorId);

			MakeUp makeUp = mapper.map(makeUpDto, MakeUp.class);
			log.info("vv2=" + makeUpDto.getName());
			makeUp.getUserEntity().setId(vendorId);
			log.info(makeUp.getName());
			makeupRepository.save(makeUp);
			MakeUpDto saveToMakeUpDto = mapper.map(makeUp, MakeUpDto.class);
			log.info(saveToMakeUpDto.getName());
			return new MakeUpApiResponce(saveToMakeUpDto, null, HttpStatus.CREATED, "makeUp add successfully", false);

		} catch (Exception e) {
			// TODO: handle exception
		}
		return new MakeUpApiResponce(null, null, HttpStatus.INTERNAL_SERVER_ERROR, "error", true);
	}

	@Override
	public PhotoApiResponce addPhoto(PhotoDto PhotoDto, Long vendorId) {
		try {
			Optional<UserEntity> userEntity = userEntityRepository.findById(vendorId);

			Photo photo = mapper.map(PhotoDto, Photo.class);
			log.info("vv2=" + PhotoDto.getName());
			photo.getUserEntity().setId(vendorId);
			log.info(photo.getName());
			photoRepository.save(photo);
			PhotoDto saveTophoto = mapper.map(photo, PhotoDto.class);
			log.info(saveTophoto.getName());
			return new PhotoApiResponce(saveTophoto, null, HttpStatus.CREATED, "photo add successfully", false);

		} catch (Exception e) {
			// TODO: handle exception
		}
		return new PhotoApiResponce(null, null, HttpStatus.INTERNAL_SERVER_ERROR, "error", true);
	}

	
	@Override
	public VenueApiResponce deleteVenueById( Long vanueId,Long vendor_id) {
	    try {
	        Optional<Vanue> vanueDb = venueRepository.findBy(vanueId,vendor_id);
	        if (vanueDb.isPresent()) {
	            Vanue vanueFromDb = vanueDb.get();

	            // Setting the status to false instead of deleting
	            vanueFromDb.setStatus(false);
	            venueRepository.save(vanueFromDb);

	            // Mapping entity to DTO
	            VenueDto saveToVanue = mapper.map(vanueFromDb, VenueDto.class);
	            log.info("Venue Deleted: " + saveToVanue.getName());

	            return new VenueApiResponce(saveToVanue, null, HttpStatus.OK, "Venue deleted successfully", false);
	        } else {
	            return new VenueApiResponce(null, null, HttpStatus.NOT_FOUND, "Venue not present", true);
	        }
	    } catch (Exception e) {
	        log.error("Error while deleting venue: ", e);
	        return new VenueApiResponce(null, null, HttpStatus.INTERNAL_SERVER_ERROR, "Error occurred", true);
	    }
	}
}
