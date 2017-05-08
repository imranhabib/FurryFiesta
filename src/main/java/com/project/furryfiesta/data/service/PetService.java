package com.project.furryfiesta.data.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.project.furryfiesta.data.model.Pet;

@Service
public interface PetService {

	
	public Pet getPetById(int id);
	
	public void update(int id, Pet pet);
	
	
	public Pet create(Pet pet);
	
	public List<Pet> findAllPets();

	public void remove(int id);

	public List<Pet> findAllPetsByColor();

	public List<Pet> findAllPetsByCategory();

}
