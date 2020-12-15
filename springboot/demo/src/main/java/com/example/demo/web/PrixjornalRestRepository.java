package com.example.demo.web;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dao.PrixjornalRepository;
import com.example.demo.entities.Prixjornal;

@RestController
@CrossOrigin(origins = "*")
public class PrixjornalRestRepository {

	@Autowired
	private PrixjornalRepository prixjornalRepository;
	
	 @GetMapping("/Prixjornal")
	    public List<Prixjornal> getAllProduits() {
	        return prixjornalRepository.findAll();
	    }
	 
	
	 @GetMapping("/Prixjornal/{id}")
	    public Prixjornal getProduitById(@PathVariable(value = "id") Long PrixjornalId)
	    {
	        return prixjornalRepository.findById(PrixjornalId).orElse(null);
	    }
	 
	 @PostMapping("/Prixjornal")
	    public Prixjornal createProduit(@Valid @RequestBody Prixjornal produit) {
	        return prixjornalRepository.save(produit);
	    }
		
		
		@DeleteMapping("/Prixjornal/{id}")
	    public Map<String, Boolean> deleteProduit(@PathVariable(value = "id") Long produitId)
	         {
			Prixjornal produit = prixjornalRepository.findById(produitId).orElse(null); 
			prixjornalRepository.delete(produit);
	        Map<String, Boolean> response = new HashMap<>();
	        response.put("deleted", Boolean.TRUE);
	        return response;
	    } 

}
