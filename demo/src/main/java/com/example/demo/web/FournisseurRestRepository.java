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
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dao.FournisseurRepository;
import com.example.demo.entities.Fournisseur;

@RestController
@CrossOrigin(origins = "*")
public class FournisseurRestRepository {

	@Autowired
	private FournisseurRepository fournisseurRepository ;
	
	 @GetMapping("/fournisseur")
	    public List<Fournisseur> getAllProduits() {
	        return fournisseurRepository.findAll();
	    }
	    
	    @PostMapping("/fournisseur")
	    public Fournisseur createProduit(@Valid @RequestBody Fournisseur produit) {
	        return fournisseurRepository.save(produit);
	    }
		
		
		@DeleteMapping("/fournisseur/{id}")
	    public Map<String, Boolean> deleteProduit(@PathVariable(value = "id") Long produitId)
	         {
			Fournisseur produit = fournisseurRepository.findById(produitId).orElse(null); 
			fournisseurRepository.delete(produit);
	        Map<String, Boolean> response = new HashMap<>();
	        response.put("deleted", Boolean.TRUE);
	        return response;
	    } 
		
		@PutMapping("/fournisseur/{id}")
	    public Fournisseur updateProduit(@PathVariable(value = "id") Long produitId,
	         @Valid @RequestBody Fournisseur produitDetails){
			Fournisseur produit = fournisseurRepository.findById(produitId).orElse(null);
	        

			produit.setId(produitDetails.getId());
			produit.setName(produitDetails.getName());
			produit.setFrnimg(produitDetails.getFrnimg());
			produit.setAddress(produitDetails.getAddress());
			produit.setSolde(produitDetails.getSolde());
			produit.setTel(produitDetails.getTel());
	        final Fournisseur updatedProduit = fournisseurRepository.save(produit);
	        return fournisseurRepository.save(updatedProduit);
	    }
}
