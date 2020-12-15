package com.example.demo.entities;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Prixjornal implements Serializable {
	private static final long serialVersionUID = 1L;
	
	@Id  @GeneratedValue
	private Long id;
	private Double prixdvente;
	private Double prixdachat;
	private Double profit;
	private produits infosprod;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Double getPrixdvente() {
		return prixdvente;
	}
	public void setPrixdvente(Double prixdvente) {
		this.prixdvente = prixdvente;
	}
	public Double getPrixdachat() {
		return prixdachat;
	}
	public void setPrixdachat(Double prixdachat) {
		this.prixdachat = prixdachat;
	}
	public Double getProfit() {
		return profit;
	}
	public void setProfit(Double profit) {
		this.profit = profit;
	}
	public produits getInfosprod() {
		return infosprod;
	}
	public void setInfosprod(produits infosprod) {
		this.infosprod = infosprod;
	}
	public Prixjornal() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Prixjornal(Double prixdvente, Double prixdachat, Double profit, produits infosprod) {
		super();
		this.prixdvente = prixdvente;
		this.prixdachat = prixdachat;
		this.profit = profit;
		this.infosprod = infosprod;
	}
	
	
	
}
