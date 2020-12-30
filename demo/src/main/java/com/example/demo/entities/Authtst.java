package com.example.demo.entities;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Authtst implements Serializable{

	private static final long serialVersionUID = 1L;
	
	@Id  @GeneratedValue
	private Long id;
	
	private String tst;
	public Authtst() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Authtst(String tst) {
		super();
		this.tst = tst;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getTst() {
		return tst;
	}
	public void setTst(String tst) {
		this.tst = tst;
	}

}
