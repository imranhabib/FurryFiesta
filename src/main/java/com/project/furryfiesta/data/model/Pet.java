package com.project.furryfiesta.data.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Pets")
public class Pet implements Serializable {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	


	@Column(name = "name")
	private String name;
	
	@Column(name = "category")
	private String category;
	
	@Column(name = "status")
	private String status;
	
	@Column(name = "color")
	private String color;
	
	@Column(name = "photourl")
	private String photourl; 
	
	
	@Column(name = "bank")
	private String bank; 
	
	public Pet(){
		
	}
	
	public Pet(String name, String category, String status, String color, String photourl, String bank) {
		this.name = name; 
		this.category = category;
		this.status = status; 
		this.color = color; 
		this.photourl = photourl; 
		this.bank = bank; 
	}


	
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}


	public String getBank() {
		return bank;
	}

	public void setBank(String bank) {
		this.bank = bank;
	}


	public String getPhotoUrl() {
		return photourl;
	}

	public void setPhotoUrl(String photourl) {
		this.photourl = photourl;
	}
	
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}
	
}


