package com.example.demo.entities;


import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class produits implements Serializable{

	private static final long serialVersionUID = 1L;
	
	@Id  @GeneratedValue
	private Long id;
	private String name;
	private String Prodimg;
	private Long quantity;
	private Double prix;
	private Double prixachat;
	private String ref;
	
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getProdimg() {
		return Prodimg;
	}
	public void setProdimg(String prodimg) {
		this.Prodimg = prodimg;
	}
	public Long getQuantity() {
		return quantity;
	}
	public void setQuantity(Long quantity) {
		this.quantity = quantity;
	}
	public Double getPrix() {
		return prix;
	}
	public void setPrix(Double prix) {
		this.prix = prix;
	}
	
	public String getRef() {
		return ref;
	}
	public void setRef(String ref) {
		this.ref = ref;
	}
	
	public Double getPrixachat() {
		return prixachat;
	}
	public void setPrixachat(Double prixachat) {
		this.prixachat = prixachat;
	}
	
	public produits() {
		super();
		// TODO Auto-generated constructor stub
	}
	public produits(String name, String prodimg, Long quantity, Double prix, Double prixachat, String ref) {
		super();
		this.name = name;
		Prodimg = prodimg;
		this.quantity = quantity;
		this.prix = prix;
		this.prixachat = prixachat;
		this.ref = ref;
	}
}

