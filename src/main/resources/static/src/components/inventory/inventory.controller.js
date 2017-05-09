/**
 * http://usejsdoc.org/
 */
import bunny from '../../public/img/bunny.jpeg';
import pug from '../../public/img/pug.jpg';
import puppies from '../../public/img/puppies.jpg';
import icon from '../../public/img/favicon.png';
import dog from '../../public/img/dog.jpg';

export default class inventoryController {
	constructor($scope, $http){

		//this.gateway = 'https://furryfiesta.herokuapp.com/pets/';
		/*
		 * Uncomment the gateway below and comment out the 
		 * Heroku call to run the project on a local Tomcat server
		 * keyword: server-reference
		 */
		this.gateway = 'http://localhost:8080/'; 
		this.getAll = this.gateway + 'all'; 
		this.remove = this.gateway + 'remove/'; 
		this.add = this.gateway + 'add'; 
		
		this.$scope = $scope; 
		this.$http = $http; 
		this.bunny = bunny; 
		this.pug = pug; 
		this.icon = icon; 
		this.puppies = puppies;
		this.dog = dog; 
		this.id; 
		this.note = 'All empty fields will be given a default value upon listing'; 
		this.defaultPhotoUrl = 'http://i68.tinypic.com/kd0gms.png';
		this.defaultName = "John Doe"; 
		this.mode = "success"; 
		this.defaultValue = "unknown"; 
		this.showOverlay = false; 
		this.allPets = []; 
		this.pet = {}; 
		
		this.searchSuccess = false; 
		
		this.retrieveAll();  
		
	}
	
	/* 
	 Reserve a pet by setting its status to pending
	 */
	reservePet(id){	
		this.id = id; 
		this.message = 'Reserve Pet'; 
		this.secondaryMessage = 'Are you sure you want to reserve this pet?';
		$('#feedbackModal').modal('show');
	}
	
	/* 
	 Confirm the pet reservation and make the service call
	 */
	confirmReserve(){		
	   if(this.message === 'Reserve Pet'){
		   let petToUpdate = this.allPets.find((x) => x.id === this.id);
 		   petToUpdate.status = 'pending';
 		   this.closeModal(); 
		   
	   }
	}
		
	searchForPet(){
	  let petId = parseInt(document.getElementById("searchID").value); 
	  if(isNaN(petId)){
		  this.message = 'Incorrect Input'; 
		  this.secondaryMessage = 'Please enter numbers only'; 
		  $('#feedbackModal').modal('show');
	  } else {
		  this.getPetById(petId);		  
	  }
	    
	}
	
	
	/* 
	 Remove a single pet
	 */
	removePet(id){
		this.removePetById(id); 
	}
		
	
	/* 
	 Retrieve all pets and populate view
	 */
	retrieveAll(){
	this.$http({
			  method: 'GET',
			  url: this.getAll, 
			}).then((response) => {
			   this.allPets = response.data;  
		}, (error) => {
		});
		
	}
	
	/* 
	 Return pet with matching id
	 */
	getPetById(id){
		this.id = id;
		this.$http({
			  method: 'GET',
			  url: this.gateway + this.id, 
			}).then((response) => {  
				this.mapPet(response.data); 
		}, (error) => {
			this.unSuccessfulFindOperation(); 
		});
	}
	
	
	
	mapPet(pet){
		this.pet.name = pet.name; 
		this.pet.color = pet.color; 
		this.pet.category = pet.category; 
		this.pet.photoUrl = pet.photoUrl; 
		this.pet.status = pet.status;
		this.pet.bank = pet.bank; 
		this.pet.id = pet.id; 
		this.searchSuccess = true; 
	}
	
	
	/* 
	 Update the status of the pet
	 */
	updatePetById(pet){
		
		this.$http({
			  method: 'PUT',
			  url: this.gateway + this.id, 
			}).then((response) => {  
		}, (error) => {
		});
	}
	
	/*
	 Remove selected Pet from list & update view
	 */
	removePetById(id){
		this.petToRemove = this.allPets.find((x) => x.id === id); 
		this.id = id; 
		this.$http({
			  method: 'DELETE',
			  url: this.remove + this.id, 
		}).then((response) => {
			// TODO: add modal here that affirms the deletion
			this.successfulDeletionOperation(); 
			this.allPets.splice(this.allPets.indexOf(this.petToRemove), 1); 
			this.allPets = angular.copy(this.allPets);
			this.clearSearch(); 
		}, (error) => {
			this.unSuccessfulOperation(); 
			});
	}
	
	
	/*
	 Add Pet
	 */
	addPet(){
		this.validateInputs(); 
		this.pet.status = 'available'; 
		this.$http({
			  method: 'POST',
			  url: this.add,
			  data: this.pet,
		}).then((response) => {
			this.successfulOperation(); 
			this.retrieveAll(); 
		}, (error) => {
			this.unSuccessfulOperation(); 
			});
	}
	
	
	
	successfulOperation(){
		this.message = 'Successful Listing!'; 
		this.secondaryMessage = 'Congrats! You\'re pet is now listed'; 
		$('#feedbackModal').modal('show');
	}
	
	
	successfulDeletionOperation(){
		this.message = 'Successful Pet Removal!'; 
		this.secondaryMessage = 'Congrats! this pet is now removed'; 
		$('#feedbackModal').modal('show');
	}
	
	
	unSuccessfulOperation(){
		this.message = 'Oh No!'; 
		this.secondaryMessage = 'Something went wrong, please give it another go!'; 
		$('#feedbackModal').modal('show');
	}
	
	unSuccessfulFindOperation(){
		this.message = 'Pet Not Found!'; 
		this.secondaryMessage = 'No Pet with that ID, please give it another go!'; 
		$('#feedbackModal').modal('show');
	}
	
	closeModal(){ 
		$('#feedbackModal').modal('hide');
	}
	
	
	
	clearSearch(){
		this.searchSuccess = false; 
	}
	
	
	/* 
	 Helper method to validate inputs
	 */
	validateInputs(){
		(document.getElementById("photo").value).length < 1 ? 
				this.pet.photoUrl = this.defaultPhotoUrl : 
					this.pet.photoUrl = document.getElementById("photo").value;
		(document.getElementById("name").value).length < 1 ? 
				this.pet.name = this.defaultName : 
					this.pet.name = document.getElementById("name").value; 
		(document.getElementById("color").value).length < 1 ? 
				this.pet.color = this.defaultValue : 
					this.pet.color = document.getElementById("color").value; 
		(document.getElementById("category").value).length < 1 ? 
				this.pet.category = this.defaultValue : 
					this.pet.category = document.getElementById("category").value; 
		(document.getElementById("bank").value).length < 1 ? 
				this.pet.bank = this.defaultValue : 
					this.pet.bank = document.getElementById("bank").value; 
	}
	

	
	
}
