package com.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.demo.dao.ServiceRepo;
import com.demo.model.Service;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class ServiceController 
{
	@Autowired
	private ServiceRepo s1;
	
	@CrossOrigin(origins="http://localhost:4200")
	@PostMapping("/insertrecord")
	public Service insertrecord(@RequestBody Service serv)
	{
		return this.s1.save(serv);
	}
	
	@CrossOrigin(origins="http://localhost:4200")
	@PostMapping("/updaterecord")
	public Service updaterecord(@RequestBody Service serv)
	{
		return this.s1.save(serv);
	}
	
	@CrossOrigin(origins="http://localhost:4200")
	@PostMapping("/deleterecord")	
	public void deleterecord(@RequestBody Service serv)
	{
		this.s1.delete(serv);
	}
	
	@CrossOrigin(origins="http://localhost:4200")
	@GetMapping("/viewrecord")	
	public List<Service> viewrecord()
	{
		return this.s1.findAll();
	}
	
}
