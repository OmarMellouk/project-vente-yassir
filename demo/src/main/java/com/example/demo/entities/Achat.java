package com.example.demo.entities;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Achat implements Serializable {

	private static final long serialVersionUID = 1L;
	
	@Id  @GeneratedValue
	private Long id;
	private String name;
	private Long quantity;
	private Double prix;
	private Double prixvent;
	private Long ttc;
	private Long noir;
	private String frn;
	
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
	
	public Double getPrixvent() {
		return prixvent;
	}
	public void setPrixvent(Double prixvent) {
		this.prixvent = prixvent;
	}

	public Long getTtc() {
		return ttc;
	}
	public void setTtc(Long ttc) {
		this.ttc = ttc;
	}
	public Long getNoir() {
		return noir;
	}
	public void setNoir(Long noir) {
		this.noir = noir;
	}
	
	
	public String getFrn() {
		return frn;
	}
	public void setFrn(String frn) {
		this.frn = frn;
	}
	
	public Achat() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Achat(String name, Long quantity, Double prix, Double prixvent,Long ttc,Long noir,String frn) {
		super();
		this.name = name;
		this.quantity = quantity;
		this.prix = prix;
		this.prixvent = prixvent;
		this.ttc = ttc;
		this.noir = noir;
		this.frn = frn;
	}
}
