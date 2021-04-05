package com.crm.model;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;



@Entity
@Table(name ="logement")
public class Logement {
	@Id @GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;

	@NotNull(message = "intitule is required")
	private String intitule;
	
	@NotNull(message = "description is required")
	private String description;
	
	@NotNull(message = "prix is required")
	private double prix;
	
	@NotNull(message = "image is required")
	private String image;
	

	public Logement(@NotNull(message = "intitule is required") String intitule,
			@NotNull(message = "description is required") String description,
			@NotNull(message = "prix is required") double prix, @NotNull(message = "image is required") String image) {
		super();
		this.intitule = intitule;
		this.description = description;
		this.prix = prix;
		this.image = image;
	}
	public Logement() {
		super();
		// TODO Auto-generated constructor stub
	}
	public String getIntitule() {
		return intitule;
	}
	public void setIntitule(String intitule) {
		this.intitule = intitule;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public double getPrix() {
		return prix;  
	}
	public void setPrix(double prix) {
		this.prix = prix;
	}
	public String getImage() {
		return image;  
	}
	public void setImage(String image) {
		this.image = image;
	}
	
	
	
	

}

