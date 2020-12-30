package com.example.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Achat;

@Repository
public interface AchatRepository extends JpaRepository<Achat,Long>  {

}
