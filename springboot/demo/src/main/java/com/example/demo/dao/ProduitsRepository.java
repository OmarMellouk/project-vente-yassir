package com.example.demo.dao;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.produits;

@Repository
public interface ProduitsRepository extends JpaRepository<produits,Long> {
	@Query("select m from produits m where m.name like :x OR m.Prodimg like :x" )
	public List<produits> findByNameLike(@Param("x")String name);
}
