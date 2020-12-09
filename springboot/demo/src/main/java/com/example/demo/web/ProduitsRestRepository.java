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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dao.ProduitsRepository;
import com.example.demo.entities.produits;

@RestController
@CrossOrigin(origins = "*")
public class ProduitsRestRepository {

	@Autowired
	private ProduitsRepository prodRepository ;
	
	 @GetMapping("/produits")
	    public List<produits> getAllProduits() {
	        return prodRepository.findAll();
	    }
	 
	 @GetMapping("/chercherProduits")
		public List<produits> chercher(@RequestParam( name="name", defaultValue="") String name ){
			return prodRepository.findByNameLike("%"+name+"%");
		}
	
	 @GetMapping("/produits/{id}")
	    public produits getProduitById(@PathVariable(value = "id") Long produitId)
	    {
	        return prodRepository.findById(produitId).orElse(null);
	    }
	 
	 @PostMapping("/produits")
	    public produits createProduit(@Valid @RequestBody produits produit) {
	        return prodRepository.save(produit);
	    }
		
		
		@DeleteMapping("/produits/{id}")
	    public Map<String, Boolean> deleteProduit(@PathVariable(value = "id") Long produitId)
	         {
			produits produit = prodRepository.findById(produitId).orElse(null); 
	        prodRepository.delete(produit);
	        Map<String, Boolean> response = new HashMap<>();
	        response.put("deleted", Boolean.TRUE);
	        return response;
	    } 
		
		
		@PutMapping("/produits/{id}")
	    public produits updateProduit(@PathVariable(value = "id") Long produitId,
	         @Valid @RequestBody produits produitDetails){
			produits produit = prodRepository.findById(produitId).orElse(null);
	        

			produit.setId(produitDetails.getId());
			produit.setName(produitDetails.getName());
			produit.setProdimg(produitDetails.getProdimg());
			produit.setQuantity(produitDetails.getQuantity());
	        final produits updatedProduit = prodRepository.save(produit);
	        return prodRepository.save(updatedProduit);
	    }
		
		@PutMapping("/produits/addqnt/{id}")
	    public produits addqntProduit(@PathVariable(value = "id") Long produitId)
		{
			produits produit = prodRepository.findById(produitId).orElse(null);
	        
			produit.setQuantity(produit.getQuantity()+1);
	        final produits updatedProduit = prodRepository.save(produit);
	        return prodRepository.save(updatedProduit);
	    }
		
}