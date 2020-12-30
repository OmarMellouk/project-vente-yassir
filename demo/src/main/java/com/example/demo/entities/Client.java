package com.example.demo.entities;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Client implements Serializable {
	private static final long serialVersionUID = 1L;
	
	@Id  @GeneratedValue
	private Long id;
	private Long ice;
	private String name;
	private String clnimg;
	private String addressfact;
	private String addresslaivr;
	private Long plafond;
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
	public String getClnimg() {
		return clnimg;
	}
	public void setClnimg(String clnimg) {
		this.clnimg = clnimg;
	}
	public String getAddressfact() {
		return addressfact;
	}
	public void setAddressfact(String addressfact) {
		this.addressfact = addressfact;
	}
	public String getAddresslaivr() {
		return addresslaivr;
	}
	public void setAddresslaivr(String addresslaivr) {
		this.addresslaivr = addresslaivr;
	}
	public Long getPlafond() {
		return plafond;
	}
	public void setPlafond(Long plafond) {
		this.plafond = plafond;
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
	
	public Long getIce() {
		return ice;
	}
	public void setIce(Long ice) {
		this.ice = ice;
	}
	
	public Client() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Client(String name, String clnimg, String addressfact, String addresslaivr, Long plafond, Double solde,
			Long tel, Long ice) {
		super();
		this.name = name;
		this.clnimg = clnimg;
		this.addressfact = addressfact;
		this.addresslaivr = addresslaivr;
		this.plafond = plafond;
		this.solde = solde;
		this.tel = tel;
		this.ice = ice;
	}
	
}
