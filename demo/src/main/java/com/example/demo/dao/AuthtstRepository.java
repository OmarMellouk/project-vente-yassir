package com.example.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Authtst;

@Repository
public interface AuthtstRepository extends JpaRepository<Authtst,Long> {

}
