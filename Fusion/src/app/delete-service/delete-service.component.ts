import { Component, OnInit } from '@angular/core';
import{AutoserviceService} from '../autoservice.service';

@Component({
  selector: 'app-delete-service',
  templateUrl: './delete-service.component.html',
  styleUrls: ['./delete-service.component.css']
})
export class DeleteServiceComponent implements OnInit {

  constructor(private s1:AutoserviceService) { }

  ngOnInit(): void {
  }
  deletedata(deleteform:{value:any;})
  {
     return this.s1.deletedata1(deleteform.value).subscribe();
  }

}
