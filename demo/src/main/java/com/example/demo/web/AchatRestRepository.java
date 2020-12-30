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

import com.example.demo.dao.AchatRepository;
import com.example.demo.entities.Achat;

@RestController
@CrossOrigin(origins = "*")
public class AchatRestRepository {

	@Autowired
	private AchatRepository AchatRepository ;
	
	 @GetMapping("/achat")
	    public List<Achat> getAllProduits() {
	        return AchatRepository.findAll();
	    }
	    
	    @PostMapping("/achat")
	    public Achat createProduit(@Valid @RequestBody Achat produit) {
	        return AchatRepository.save(produit);
	    }
		
		
		@DeleteMapping("/achat/{id}")
	    public Map<String, Boolean> deleteProduit(@PathVariable(value = "id") Long produitId)
	         {
			Achat produit = AchatRepository.findById(produitId).orElse(null); 
			AchatRepository.delete(produit);
	        Map<String, Boolean> response = new HashMap<>();
	        response.put("deleted", Boolean.TRUE);
	        return response;
	    } 
}
