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
	public produits() {
		super();
		// TODO Auto-generated constructor stub
	}
	public produits(String name, String prodimg, Long quantity) {
		super();
		this.name = name;
		this.Prodimg = prodimg;
		this.quantity = quantity;
	}
	
}

