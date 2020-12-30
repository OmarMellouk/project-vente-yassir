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

import com.example.demo.dao.ClientRepository;
import com.example.demo.entities.Client;

@RestController
@CrossOrigin(origins = "*")
public class ClientRestRepository {

	@Autowired
	private ClientRepository clientRepository ;
	
	 @GetMapping("/client")
	    public List<Client> getAllProduits() {
	        return clientRepository.findAll();
	    }
	    
	    @PostMapping("/client")
	    public Client createProduit(@Valid @RequestBody Client produit) {
	        return clientRepository.save(produit);
	    }
		
		
		@DeleteMapping("/client/{id}")
	    public Map<String, Boolean> deleteProduit(@PathVariable(value = "id") Long produitId)
	         {
			Client produit = clientRepository.findById(produitId).orElse(null); 
			clientRepository.delete(produit);
	        Map<String, Boolean> response = new HashMap<>();
	        response.put("deleted", Boolean.TRUE);
	        return response;
	    } 
		
		@PutMapping("/client/{id}")
	    public Client updateProduit(@PathVariable(value = "id") Long produitId,
	         @Valid @RequestBody Client produitDetails){
			Client produit = clientRepository.findById(produitId).orElse(null);
	        

			produit.setId(produitDetails.getId());
			produit.setName(produitDetails.getName());
			produit.setClnimg(produitDetails.getClnimg());
			produit.setAddressfact(produitDetails.getAddressfact());
			produit.setAddresslaivr(produitDetails.getAddresslaivr());
			produit.setPlafond(produitDetails.getPlafond());
			produit.setSolde(produitDetails.getSolde());
			produit.setTel(produitDetails.getTel());
			produit.setIce(produitDetails.getIce());
	        final Client updatedProduit = clientRepository.save(produit);
	        return clientRepository.save(updatedProduit);
	    }
}
