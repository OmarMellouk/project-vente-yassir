package com.example.demo.entities;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Fournisseur implements Serializable {

	private static final long serialVersionUID = 1L;
	
	@Id  @GeneratedValue
	private Long id;
	private String name;
	private String frnimg;
	private String address;
	private Double solde;
	private Long tel;
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
	public String getFrnimg() {
		return frnimg;
	}
	public void setFrnimg(String frnimg) {
		this.frnimg = frnimg;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public Double getSolde() {
		return solde;
	}
	public void setSolde(Double solde) {
		this.solde = solde;
	}
	public Long getTel() {
		return tel;
	}
	public void setTel(Long tel) {
		this.tel = tel;
	}
	public Fournisseur() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Fournisseur(String name, String frnimg, String address, Double solde, Long tel) {
		super();
		this.name = name;
		this.frnimg = frnimg;
		this.address = address;
		this.solde = solde;
		this.tel = tel;
	}
	
	
}
