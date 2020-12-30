package com.example.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Prixjornal;


@Repository
public interface PrixjornalRepository extends JpaRepository<Prixjornal,Long>  {

}
