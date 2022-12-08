import { Component, OnInit } from '@angular/core';
import{AutoserviceService} from '../autoservice.service';

@Component({
  selector: 'app-viewservice',
  templateUrl: './viewservice.component.html',
  styleUrls: ['./viewservice.component.css']
})
export class ViewserviceComponent implements OnInit {

  data:any;
  constructor(private s1:AutoserviceService) { }

  ngOnInit(): void {
    let response=this.s1.viewdata1();

    response.subscribe((data1)=>this.data=data1);
  }

}
