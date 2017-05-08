package com.project.furryfiesta.data.controller;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.slf4j.LoggerFactory;
import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import com.project.furryfiesta.data.model.Pet;
import com.project.furryfiesta.data.repository.PetRepository;
import com.project.furryfiesta.data.service.PetServiceImpl;

import io.swagger.annotations.*;

@RestController
@RequestMapping(value = "/pets", produces = MediaType.APPLICATION_JSON_VALUE)
@Api(tags = { "pets" })
public class PetApiController {

	
	@Autowired
	private PetServiceImpl petService; 
	private PetRepository petRepo; 
	
	private static final Logger logger = LoggerFactory.getLogger(PetApiController.class); 

	@Autowired
	PetApiController(PetRepository petRepo) {
		this.petRepo = petRepo;
	}
	
	 
	@ApiOperation(value = "Add a new pet to the store", notes = "Adds specific pet to store inventory")
	@RequestMapping(value = "/add", method = RequestMethod.POST)
	@ApiResponse(code = 405, message = "Invalid input")
	public ResponseEntity<Pet> addPet(@RequestBody @Valid final Pet pet) {
	    return new ResponseEntity<Pet>(petService.create(pet), HttpStatus.CREATED);
	  }
	 
	
	 

	 @ApiOperation(value = "Find pet by ID")
	  @ApiResponses(value = {
	        @ApiResponse(code = 200, message = "successful operation", response = Pet.class),
	        @ApiResponse(code = 400, message = "Invalid ID supplied", response = Pet.class),
	        @ApiResponse(code = 404, message = "Pet not found", response = String.class)
	  })
	  @RequestMapping(value = "/{petId}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	  public Pet findById(
	        @ApiParam(name = "id", value = "Pet unique id", required = true) @PathVariable(value = "petId") final int id) {
		 Pet pet = petService.getPetById(id); 
		 return pet;
	  
	 }
	 
	 
	  @ApiOperation(value = "Return All Pets, regardless of status")
	  @ApiResponses(value = {
	        @ApiResponse(code = 200, message = "successful operation", response = Pet.class),
	        @ApiResponse(code = 404, message = "unsuccessful operation", response = String.class)
	  })
	  @RequestMapping(value = "/all" , method = RequestMethod.GET)
	  public List<Pet> getAllPets() {
	    return petService.findAllPets();
	  }
	  
	  @ApiOperation(value = "Deletes a pet in store by id")
	  @ApiResponses(value = {
	        @ApiResponse(code = 204, message = "Successful. Pet deleted from store.", response = Pet.class),
	        @ApiResponse(code = 404, message = "Unsuccessful. Pet to be deleted not found in store", response = String.class)
	  })
	  @RequestMapping(value = "/remove/{petId}", method = RequestMethod.DELETE)
	  @ResponseStatus(HttpStatus.NO_CONTENT)
	  public void delete(
	        @ApiParam(name = "petId", value = "Id of pet to be searhed in store", required = true) @PathVariable(value = "petId") Integer petId) {
	    petService.remove(petId);
	  }
	 
	 
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	