package com.example.demo.web;

import java.util.List;

import javax.validation.Valid;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dao.AuthtstRepository;
import com.example.demo.entities.Authtst;

@RestController
@CrossOrigin(origins = "*")
public class AuthtstRestRepository {

	@Autowired
	private AuthtstRepository authtstRepository ;
	
	 @GetMapping("/authtst")
	    public List<Authtst> getAllAuth()
	    {
	        return authtstRepository.findAll();
	         
	    }
	
	 @GetMapping("/authtst/{id}")
	    public Authtst getMarqueById(@PathVariable(value = "id") Long AuthtstId)
	    {
	        return authtstRepository.findById(AuthtstId).orElse(null);
	         
	    }
	
	@PutMapping("/authtst/{id}")
    public Authtst updateAuthtst(@PathVariable(value = "id") Long authtstId,
         @Valid @RequestBody Authtst authtstDetails){
		Authtst authtst = authtstRepository.findById(authtstId).orElse(null);
        

		authtst.setId(authtstDetails.getId());
		authtst.setTst(authtstDetails.getTst());
        
        final Authtst updatedauthtst = authtstRepository.save(authtst);
        return authtstRepository.save(updatedauthtst);
    }
//	@PutMapping("/authtstone/{id}")
//    public Authtst updateAuthtst(@PathVariable(value = "id") Long authtstId,
//    		@PathVariable(value = "tst") String tst){
//		Authtst authtst = authtstRepository.findById(authtstId).orElse(null);
//        
//
//		//authtst.setId(authtstDetails.getId());
//		authtst.setTst(tst);
//        
//        final Authtst updatedauthtst = authtstRepository.save(authtst);
//        return authtstRepository.save(updatedauthtst);
//    }
}