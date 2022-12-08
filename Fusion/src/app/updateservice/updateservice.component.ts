import { Component, OnInit } from '@angular/core';
import{AutoserviceService} from '../autoservice.service';


@Component({
  selector: 'app-updateservice',
  templateUrl: './updateservice.component.html',
  styleUrls: ['./updateservice.component.css']
})
export class UpdateserviceComponent implements OnInit {

  constructor(private serv1:AutoserviceService) { }

  ngOnInit(): void {
  }
  updatedata(updateform:{value:any;})
  {
     return this.serv1.updatedata1(updateform.value).subscribe();
  }

}
