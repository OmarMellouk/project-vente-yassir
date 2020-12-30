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
	private Long qntttc;
	private Long qntnoir;
	private Long quantityacht;
	private Double prix;
	private Double prixachat;
	private String cat;
	private String unit;
	private Long ref;
	
	
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
	
	public Double getPrix() {
		return prix;
	}
	public void setPrix(Double prix) {
		this.prix = prix;
	}
	
	public Long getRef() {
		return ref;
	}
	public void setRef(Long ref) {
		this.ref = ref;
	}
	
	public Double getPrixachat() {
		return prixachat;
	}
	public void setPrixachat(Double prixachat) {
		this.prixachat = prixachat;
	}
	public Long getQuantityacht() {
		return quantityacht;
	}
	public void setQuantityacht(Long quantityacht) {
		this.quantityacht = quantityacht;
	}
	
	
	public String getCat() {
		return cat;
	}
	public void setCat(String cat) {
		this.cat = cat;
	}
	public String getUnit() {
		return unit;
	}
	public void setUnit(String unit) {
		this.unit = unit;
	}
	
	
	public Long getQntttc() {
		return qntttc;
	}
	public void setQntttc(Long qntttc) {
		this.qntttc = qntttc;
	}
	public Long getQntnoir() {
		return qntnoir;
	}
	public void setQntnoir(Long qntnoir) {
		this.qntnoir = qntnoir;
	}
	
	public produits() {
		super();
		// TODO Auto-generated constructor stub
	}
	public produits(String name, String prodimg, Long qntttc, Long qntnoir, Long quantityacht, Double prix, Double prixachat, Long ref, String cat, String unit) {
		super();
		this.name = name;
		Prodimg = prodimg;
		this.qntttc = qntttc;
		this.qntnoir = qntnoir;
		this.quantityacht = quantityacht;
		this.prix = prix;
		this.prixachat = prixachat;
		this.ref = ref;
		this.cat = cat;
		this.unit = unit;
	}
}

