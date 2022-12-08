package com.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.demo.model.Service;

@Repository
public interface ServiceRepo extends JpaRepository<Service,Integer>
{

}
