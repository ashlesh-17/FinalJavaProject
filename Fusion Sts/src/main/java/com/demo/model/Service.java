package com.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Service
{

	@Id
	private int serviceid;
	private String servicename;
	private String yourname;
	private String emailid;
	private Long contactno;
	
	
	
	public Service(int serviceid, String servicename, String yourname, String emailid, Long contactno) {
		super();
		this.serviceid = serviceid;
		this.servicename = servicename;
		this.yourname = yourname;
		this.emailid = emailid;
		this.contactno = contactno;
	}

	public Service() {
		super();
			}
	
	public int getServiceid() {
		return serviceid;
	}
	public void setServiceid(int serviceid) {
		this.serviceid = serviceid;
	}
	public String getServicename() {
		return servicename;
	}
	public void setServicename(String servicename) {
		this.servicename = servicename;
	}
	public String getYourname() {
		return yourname;
	}
	public void setYourname(String yourname) {
		this.yourname = yourname;
	}
	public String getEmailid() {
		return emailid;
	}
	public void setEmailid(String emailid) {
		this.emailid = emailid;
	}
	public Long getContactno() {
		return contactno;
	}
	public void setContactno(Long contactno) {
		this.contactno = contactno;
	}
	
	
	
}
