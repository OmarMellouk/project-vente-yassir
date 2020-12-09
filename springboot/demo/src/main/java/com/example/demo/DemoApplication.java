package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.example.demo.dao.ProduitsRepository;
import com.example.demo.entities.produits;

@SpringBootApplication
public class DemoApplication implements CommandLineRunner {

	@Autowired
	private ProduitsRepository prodRepository;
	
	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		prodRepository.save(new produits("prod1", "../../../assets/imgs/iph1.png", (long) 5));
		prodRepository.save(new produits("prod2", "../../../assets/imgs/iph2.jpg", (long) 6));
		prodRepository.save(new produits("prod3", "../../../assets/imgs/iph3.png", (long) 2));
		prodRepository.save(new produits("prod4", "../../../assets/imgs/iph4.png", (long) 6));
		prodRepository.save(new produits("prod5", "../../../assets/imgs/iph5.png", (long) 3));
		prodRepository.findAll().forEach(c -> {
			System.out.println(c.getName()+" "+c.getProdimg()+" "+c.getQuantity());
		});
	}

}
