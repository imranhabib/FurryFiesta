package com.project.furryfiesta.data.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.project.furryfiesta.data.model.Pet;
import com.project.furryfiesta.data.repository.PetRepository;

@Service
public class PetServiceImpl implements PetService {
	
	@Autowired
	private PetRepository petRepo; 
	
	/*
	 * Retrieve a pet by its id
	 */
	public Pet getPetById(int id){
		return isAvailable(id); 
	}
	
	
	/*
	 * Update the inventory of pets with a new pet
	 */	
	public void update(int id, Pet pet){
		create(isAvailable(id)); 
	}
	
	
	/*
	 * Create new pet
	 */	
	@Transactional
	public Pet create(Pet pet){
		Pet p = petRepo.save(pet);
		return p; 
	}
	
	/*
	 * Retrieve all pets
	 */
	@SuppressWarnings("unchecked")
	public List<Pet> findAllPets(){
		List<Pet> pets = petRepo.findAll(); 
		if(!pets.isEmpty()){
			return pets; 
		} else {
			throw new IllegalStateException(); 
		}
			
	}

	
	/*
	 * Remove a pet from the store
	 */
	public void remove(int id){
		Pet pet = isAvailable(id); 
		if(pet != null){
			petRepo.delete(pet);
		}
	}

	
	
	
	public List<Pet> findAllPetsByColor() {
		// TODO Auto-generated method stub
		return null;
	}

	public List<Pet> findAllPetsByCategory() {
		// TODO Auto-generated method stub
		return null;
	}
	
	
	/*
	 * Helper method to check if pet is available
	 */
	public Pet isAvailable(int id){
		Pet pet = Optional.ofNullable(petRepo.findOne(id)).orElseThrow(IllegalStateException::new); 
		return pet; 
	}
	


}

