package com.project.furryfiesta.data.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.furryfiesta.data.model.Pet;

@Repository
public interface PetRepository extends JpaRepository<Pet, Integer> {
	
	List<Pet> findAllPetsByCategory(String category);
	
	List<Pet> findAllPetsByColor(String color); 
	
}
