package com.app.service;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.app.dto.DecorationDto;
import com.app.dto.FoodDto;
import com.app.dto.InvitesGiftDto;
import com.app.dto.MakeUpDto;
import com.app.dto.MehandiDto;
import com.app.dto.PhotoDto;
import com.app.dto.ServicesDTO;
import com.app.dto.SoundDto;
import com.app.dto.VenueDto;
import com.app.entities.Decoration;
import com.app.entities.Food;
import com.app.entities.InvitesGift;
import com.app.entities.MakeUp;
import com.app.entities.Mehandi;
import com.app.entities.Photo;
import com.app.entities.Sound;
import com.app.entities.UserEntity;
import com.app.entities.Venue;
import com.app.repository.DecorationRepository;
import com.app.repository.FoodRepository;
import com.app.repository.InvitesGiftsRepository;
import com.app.repository.MakeupRepository;
import com.app.repository.MehandiRepository;
import com.app.repository.PhotoRepository;
import com.app.repository.SoundRepository;
import com.app.repository.UserEntityRepository;
import com.app.repository.VenueRepository;
import com.app.responseapi.ApiResponse;
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
	public MehandiRepository mehandiRepository;
	
	@Autowired
	public InvitesGiftsRepository invitesGiftsRepository;
	
	@Autowired
	public MakeupRepository makeupRepository;

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
			Venue vanue = mapper.map(venueDto, Venue.class);
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
	public ApiResponse addMehandiService(MehandiDto mehandi,Long vendorId) {
		
		Mehandi newMehandi = mapper.map(mehandi, Mehandi.class);
		
		UserEntity user = userEntityRepository.findById(vendorId).orElseThrow();
		
		if(user!=null) {
		
			newMehandi.setUserEntity(user);
		Mehandi persistentEntity =  mehandiRepository.save(newMehandi);
		return new ApiResponse("Added new Mehandi Service with ID " + persistentEntity.getId());
		}
		else 
			return new ApiResponse("Cannot add service" );
	}
	
	@Override
	public ApiResponse addSoundService(SoundDto sounddto,Long vendorId) {
	Sound newSound = mapper.map(sounddto, Sound.class);
		
//		String email = sounddto.getUserEntity();
		UserEntity user = userEntityRepository.findById(vendorId).orElseThrow();
		
		if(user!=null) {
			
			newSound.setUserEntity(user);
			Sound persistUser =  soundRepository.save(newSound);
			return new ApiResponse("Added New Service With Id:"+ persistUser.getId());
		}

		else	
			return new ApiResponse("Can not add service");
	}

//	@Override
//	public SoundApiResponce addSound(SoundDto soundDto, Long vendorId) {
//		log.info("vv1=" + soundDto.getName());
//		try {
//			Optional<UserEntity> userEntity = userEntityRepository.findById(vendorId);
//
//			Sound sound = mapper.map(soundDto, Sound.class);
//			log.info("vv2=" + soundDto.getName());
//			sound.setName(soundDto.getName());
//			sound.setStatus(soundDto.getStatus());
//			sound.setDuration(soundDto.getDuration());
//			sound.setCity(soundDto.getCity());
//			sound.setDiscription(soundDto.getDiscription());
//			sound.setPrice(soundDto.getPrice());
//			sound.setRating(soundDto.getRating());
//			sound.setType(soundDto.getType());
//			sound.getUserEntity().setId(vendorId);
//			log.info(sound.getName());
//			soundRepository.save(sound);
//			SoundDto saveToVenueDto = mapper.map(sound, SoundDto.class);
//			log.info(saveToVenueDto.getName());
//			return new SoundApiResponce(saveToVenueDto, null, HttpStatus.CREATED, "Sound add successfully", false);
//
//		} catch (Exception e) {
//			// TODO: handle exception
//		}
//		return new SoundApiResponce(null, null, HttpStatus.INTERNAL_SERVER_ERROR, "error", true);
//
//	}

	@Override
	public ApiResponse addFoodService(FoodDto dto,Long vendorId) {
		Food food = mapper.map(dto, Food.class);
		
		UserEntity user = userEntityRepository.findById(vendorId).orElseThrow();
		if(user!=null) {
			food.setUserEntity(user);
			Food persistentEntity = foodRepository.save(food);
			return new ApiResponse("Added new Food service with ID" + persistentEntity.getId());
		}
		else {
			return new ApiResponse("Cannot add service");
		}
	}

	/*@Override
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
	}*/
	
	@Override
	public ApiResponse addDecorationService(DecorationDto dto,Long vendorId) {
		Decoration decoration = mapper.map(dto, Decoration.class);
		UserEntity user = userEntityRepository.findById(vendorId).orElseThrow();
		
		if(user!=null) {
			decoration.setUserEntity(user);
			Decoration persistentEntity = decorationRepository.save(decoration);
			return new ApiResponse("Added new decoration Service with ID " + persistentEntity.getId());
			
		}
		else {
		
		return new ApiResponse("cannot add service");
		}
	}

	/*@Override
	public DecorationApiResponce addDecoration(DecorationDto decorationDto, Long vendorId) {
		try {
			Optional<UserEntity> userEntity = userEntityRepository.findById(vendorId);
			System.out.println(userEntity);

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
	}*/
	
	@Override
	public ApiResponse addInvitationAndGiftService(InvitesGiftDto invitesAndGifts,Long vendorId) {
	
		InvitesGift newInvitesAndGifts = mapper.map(invitesAndGifts, InvitesGift.class);
		
		UserEntity user = userEntityRepository.findById(vendorId).orElseThrow();
		
		if(user!=null) {
		
			newInvitesAndGifts.setUserEntity(user);
			InvitesGift persistentEntity =  invitesGiftsRepository.save(newInvitesAndGifts);
		return new ApiResponse("Added new Mehandi Service with ID " + persistentEntity.getId());
		}
		else 
			return new ApiResponse("Cannot add service" );	
	}

	/*@Override
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
	}*/
	
	@Override
	public ApiResponse addMakeUpService(MakeUpDto dto,Long vendorId) {
		MakeUp makeup = mapper.map(dto, MakeUp.class);
		
		UserEntity user = userEntityRepository.findById(vendorId).orElseThrow();
		if(user!=null) {
			makeup.setUserEntity(user);
			MakeUp persistentEntity = makeupRepository.save(makeup);
			return new ApiResponse("Added new makeup with Id" + persistentEntity.getId());
		}
		else {
			return new ApiResponse("cannot add service");
		}
				
	}

	/*@Override
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
	}*/
	
	@Override
	public ApiResponse addPhotoService(PhotoDto photodto,Long vendorId) {
		
		Photo newPhoto = mapper.map(photodto, Photo.class);
		
		UserEntity user = userEntityRepository.findById(vendorId).orElseThrow();
		
		if(user!=null) {
			
			newPhoto.setUserEntity(user);
			Photo persistUser =  photoRepository.save(newPhoto);
			return new ApiResponse("Added New Service With Id:"+ persistUser.getId());
		}
		else	
			return new ApiResponse("Can not add service");
	}

	/*@Override
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
*/
	
	@Override
	public VenueApiResponce deleteVenueById( Long vanueId,Long vendor_id) {
	    try {
	        Optional<Venue> vanueDb = venueRepository.findBy(vanueId,vendor_id);
	        if (vanueDb.isPresent()) {
	            Venue vanueFromDb = vanueDb.get();

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


	@Override
	public SoundApiResponce deleteSound(Long soundId, Long vendorId) {
		  try {
		        Optional<Sound> sounddb = soundRepository.findBy(soundId,vendorId);
		        if (sounddb.isPresent()) {
		        	Sound soundFromDb = sounddb.get();

		            // Setting the status to false instead of deleting
		        	soundFromDb.setStatus(false);
		        	soundRepository.save(soundFromDb);

		            // Mapping entity to DTO
		            SoundDto saveTosound = mapper.map(soundFromDb, SoundDto.class);
		            log.info("Sound Deleted: " + saveTosound.getName());

		            return new SoundApiResponce(saveTosound, null, HttpStatus.OK, "Sound deleted successfully", false);
		        } else {
		            return new SoundApiResponce(null, null, HttpStatus.NOT_FOUND, "Sound not present", true);
		        }
		    } catch (Exception e) {
		        log.error("Error while deleting venue: ", e);
		        return new SoundApiResponce(null, null, HttpStatus.INTERNAL_SERVER_ERROR, "Error occurred", true);
		    }
	}

	@Override
	public FoodApiResponce deleteFood(Long foodId, Long vendorId) {
		  try {
		        Optional<Food> foodDb = foodRepository.findBy(foodId,vendorId);
		        if (foodDb.isPresent()) {
		        	Food foodFromDb = foodDb.get();

		            // Setting the status to false instead of deleting
		        	foodFromDb.setStatus(false);
		            foodRepository.save(foodFromDb);

		            // Mapping entity to DTO
		            FoodDto saveTofood = mapper.map(foodFromDb, FoodDto.class);
		            log.info("food Deleted: " + saveTofood.getName());

		            return new FoodApiResponce(saveTofood, null, HttpStatus.OK, "Food deleted successfully", false);
		        } else {
		            return new FoodApiResponce(null, null, HttpStatus.NOT_FOUND, "Food not present", true);
		        }
		    } catch (Exception e) {
		        log.error("Error while deleting venue: ", e);
		        return new FoodApiResponce(null, null, HttpStatus.INTERNAL_SERVER_ERROR, "Error occurred", true);
		    }
	}

	@Override
	public DecorationApiResponce deleteDecoration(Long decorationId, Long vendorId) {
		  try {
		        Optional<Decoration> decorationDb = decorationRepository.findBy(decorationId,vendorId);
		        if (decorationDb.isPresent()) {
		        	Decoration decorationFromDb = decorationDb.get();

		            // Setting the status to false instead of deleting
		        	decorationFromDb.setStatus(false);
		        	decorationRepository.save(decorationFromDb);

		            // Mapping entity to DTO
		            DecorationDto saveTodecoration = mapper.map(decorationFromDb, DecorationDto.class);
		            log.info("decoration Deleted: " + saveTodecoration.getName());

		            return new DecorationApiResponce(saveTodecoration, null, HttpStatus.OK, "Decoration deleted successfully", false);
		        } else {
		            return new DecorationApiResponce(null, null, HttpStatus.NOT_FOUND, "Decoration not present", true);
		        }
		    } catch (Exception e) {
		        log.error("Error while deleting venue: ", e);
		        return new DecorationApiResponce(null, null, HttpStatus.INTERNAL_SERVER_ERROR, "Error occurred", true);
		    }
	}

	@Override
	public InvitesGiftsApiResponce deleteInvitesGifts(Long invitesGiftId, Long vendorId) {
		  try {
		        Optional<InvitesGift> InvitesGiftDb = invitesGiftsRepository.findBy(invitesGiftId,vendorId);
		        if (InvitesGiftDb.isPresent()) {
		        	InvitesGift InvitesGiftFromDb = InvitesGiftDb.get();

		            // Setting the status to false instead of deleting
		        	InvitesGiftFromDb.setStatus(false);
		        	invitesGiftsRepository.save(InvitesGiftFromDb);

		            // Mapping entity to DTO
		            InvitesGiftDto saveToInvitesGift = mapper.map(InvitesGiftFromDb, InvitesGiftDto.class);
		            log.info("InvitesGift Deleted: " + saveToInvitesGift.getName());

		            return new InvitesGiftsApiResponce(saveToInvitesGift, null, HttpStatus.OK, "InvitesGift deleted successfully", false);
		        } else {
		            return new InvitesGiftsApiResponce(null, null, HttpStatus.NOT_FOUND, "InvitesGift not present", true);
		        }
		    } catch (Exception e) {
		        log.error("Error while deleting InvitesGift: ", e);
		        return new InvitesGiftsApiResponce(null, null, HttpStatus.INTERNAL_SERVER_ERROR, "Error occurred", true);
		    }
	}

	@Override
	public MakeUpApiResponce deleteMakeUp(Long makeUpId, Long vendorId) {
		  try {
		        Optional<MakeUp> makeUpDb = makeupRepository.findBy(makeUpId,vendorId);
		        if (makeUpDb.isPresent()) {
		        	MakeUp makeUpFromDb = makeUpDb.get();

		            // Setting the status to false instead of deleting
		        	makeUpFromDb.setStatus(false);
		            makeupRepository.save(makeUpFromDb);

		            // Mapping entity to DTO
		            MakeUpDto saveTomakeUp = mapper.map(makeUpFromDb, MakeUpDto.class);
		            log.info("MakeUp Deleted: " + saveTomakeUp.getName());

		            return new MakeUpApiResponce(saveTomakeUp, null, HttpStatus.OK, "MakeUp deleted successfully", false);
		        } else {
		            return new MakeUpApiResponce(null, null, HttpStatus.NOT_FOUND, "MakeUp not present", true);
		        }
		    } catch (Exception e) {
		        log.error("Error while deleting MakeUp: ", e);
		        return new MakeUpApiResponce(null, null, HttpStatus.INTERNAL_SERVER_ERROR, "Error occurred", true);
		    }
	}

	@Override
	public PhotoApiResponce deletePhoto(Long PhotoId, Long vendorId) {
		  try {
		        Optional<Photo> photoDb = photoRepository.findBy(PhotoId,vendorId);
		        if (photoDb.isPresent()) {
		        	Photo photoFromDb = photoDb.get();

		            // Setting the status to false instead of deleting
		        	photoFromDb.setStatus(false);
		        	photoRepository.save(photoFromDb);

		            // Mapping entity to DTO
		            PhotoDto saveTophoto = mapper.map(photoFromDb, PhotoDto.class);
		            log.info("Photo Deleted: " + saveTophoto.getName());

		            return new PhotoApiResponce(saveTophoto, null, HttpStatus.OK, "Photo deleted successfully", false);
		        } else {
		            return new PhotoApiResponce(null, null, HttpStatus.NOT_FOUND, "Photo not present", true);
		        }
		    } catch (Exception e) {
		        log.error("Error while deleting Photo: ", e);
		        return new PhotoApiResponce(null, null, HttpStatus.INTERNAL_SERVER_ERROR, "Error occurred", true);
		    }
	}



//
//public ByteArrayInputStream downloadExcel(Long vendor_id) {
//   try (Workbook workbook = new XSSFWorkbook(); ByteArrayOutputStream outputStream = new ByteArrayOutputStream()) {
//       Sheet sheet = workbook.createSheet("Service Details");
//       Row headerRow = sheet.createRow(0);
//       String[] columns = {"VendorId", "Service Type", "Service Name", "Status","Discription"};
//
//       // Create header row
//       for (int i = 0; i < columns.length; i++) {
//           Cell cell = headerRow.createCell(i);
//           cell.setCellValue(columns[i]);
//           CellStyle style = workbook.createCellStyle();
//           org.apache.poi.ss.usermodel.Font font = workbook.createFont();
//           font.setBold(true);
//           style.setFont(font);
//           cell.setCellStyle(style);
//       }
////       Optional<Venue> venue = venueRepository.findById(vendor_id);
//       // Adding service details by vendor_id
//       int rowIdx = 1;
//       rowIdx = addServiceRow(sheet, rowIdx, vendor_id, "Venue", venueRepository.findById(vendor_id));
//       rowIdx = addServiceRow(sheet, rowIdx, vendor_id, "Decoration", decorationRepository.findById(vendor_id));
//       rowIdx = addServiceRow(sheet, rowIdx, vendor_id, "Food", foodRepository.findById(vendor_id));
//       rowIdx = addServiceRow(sheet, rowIdx, vendor_id, "Invites & Gifts", invitesGiftsRepository.findById(vendor_id));
//       rowIdx = addServiceRow(sheet, rowIdx, vendor_id, "Photography", photoRepository.findById(vendor_id));
//       rowIdx = addServiceRow(sheet, rowIdx, vendor_id, "Sound", soundRepository.findById(vendor_id));
//       rowIdx = addServiceRow(sheet, rowIdx, vendor_id, "Makeup", makeupRepository.findById(vendor_id));
//
//       workbook.write(outputStream);
//       return new ByteArrayInputStream(outputStream.toByteArray());
//   } catch (IOException e) {
//       e.printStackTrace();
//       return null;
//   }
//}
//
//
//
//private int addServiceRow(Sheet sheet, int rowIdx, Long vendor_id, String serviceType, Optional<?> service) {
//    if (service.isPresent()) {
//        Object serviceObj = service.get(); // Extract the object from Optional
//        Row row = sheet.createRow(rowIdx++);
//        row.createCell(0).setCellValue("Vendor-" + vendor_id);
//        row.createCell(1).setCellValue(serviceType);
////        row.createCell(2).setCellValue(getServiceName(serviceObj));
//        row.createCell(2).setCellValue(serviceObj.getClass().getName());
//   // Fetch description dynamically
//        String description = getFieldValue(serviceObj, "description");
//        row.createCell(3).setCellValue(description);
//
//        // Fetch status dynamically and set the value
//        String status = "Unknown";
//        String statusValue = getFieldValue(serviceObj, "status");
//        if (statusValue != null && statusValue.equals("1")) {
//            status = "Active";
//        } else {
//            status = "Not Active";
//        }
//        row.createCell(4).setCellValue(status);
//    }
//    return rowIdx;
//}
//
///**
// * Generic method to fetch field values dynamically.
// */
//private String getFieldValue(Object obj, String fieldName) {
//    try {
//        return String.valueOf(obj.getClass().getMethod("get" + capitalize(fieldName)).invoke(obj));
//    } catch (Exception e) {
//        return "N/A"; // Return default value if field not found
//    }
//}
//
///**
// * Capitalizes the first letter of a field name to match getter method conventions.
// */
//private String capitalize(String str) {
//    if (str == null || str.isEmpty()) {
//        return str;
//    }
//    return str.substring(0, 1).toUpperCase() + str.substring(1);
//}

	@Override	
		public ServicesDTO getAllServices(Long vendorId) {
		    ServicesDTO servicesDTO = new ServicesDTO();

		    List<Object> allServices = new ArrayList<>();
		    allServices.addAll(venueRepository.findByUserEntityId(vendorId));
		    allServices.addAll(makeupRepository.findByUserEntityId(vendorId));
		    allServices.addAll(decorationRepository.findByUserEntityId(vendorId));
		    allServices.addAll(foodRepository.findByUserEntityId(vendorId));
		    allServices.addAll(photoRepository.findByUserEntityId(vendorId));
		    allServices.addAll(soundRepository.findByUserEntityId(vendorId));
		    allServices.addAll(invitesGiftsRepository.findByUserEntityId(vendorId));
		    allServices.addAll(mehandiRepository.findByUserEntityId(vendorId));

		    servicesDTO.setServices(allServices);
		    return servicesDTO;
		}


	@Override
	public ByteArrayInputStream downloadExcel(Long vendor_id) {
		// TODO Auto-generated method stub
		return null;
	}
	
	}
