package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.example.demo.dao.PrixjornalRepository;
import com.example.demo.dao.ProduitsRepository;
import com.example.demo.entities.Prixjornal;
import com.example.demo.entities.produits;

@SpringBootApplication
public class DemoApplication implements CommandLineRunner {

	@Autowired
	private ProduitsRepository prodRepository;
	
	@Autowired
	private PrixjornalRepository prixjornalRepository;
	
	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
//		prodRepository.save(new produits("prod1", "../../../assets/imgs/iph1.png", (long) 5, (double) 50));
//		prodRepository.save(new produits("prod2", "../../../assets/imgs/iph2.jpg", (long) 6, (double) 100));
//		prodRepository.save(new produits("prod3", "../../../assets/imgs/iph3.png", (long) 2, (double) 200));
//		prodRepository.save(new produits("prod4", "../../../assets/imgs/iph4.png", (long) 6, (double) 300));
		
		
//		prixjornalRepository.save(new Prixjornal((double) 5, (double) 5, (double) 50, "infos1"));
//		prixjornalRepository.save(new Prixjornal((double) 51, (double) 52, (double) 504, "infos2"));
//		prixjornalRepository.save(new Prixjornal((double) 53, (double) 53, (double) 502, "infos3"));
//		prixjornalRepository.save(new Prixjornal((double) 50, (double) 50, (double) 500, "infos4"));
		
		prodRepository.findAll().forEach(c -> {
			System.out.println(c.getName()+" "+c.getProdimg());
		});
	}

}
