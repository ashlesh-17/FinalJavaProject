import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AutoserviceService {

  constructor(private http: HttpClient) { }
  link1 ="http://localhost:9009/insertrecord";
  link2 = "http://localhost:9009/updaterecord";
  link3 = "http://localhost:9009/deleterecord";
  link4 = "http://localhost:9009/viewrecord";

  insertdata1(data:any)
  {
    return this.http.post(this.link1, data)
  }
  updatedata1(data:any)
 {
    return this.http.post(this.link2,data);
 }
 deletedata1(data:any)
 {
   return this.http.post(this.link3,data);
 }
 viewdata1()
  {

    return this.http.get(this.link4);
  }
}
  
