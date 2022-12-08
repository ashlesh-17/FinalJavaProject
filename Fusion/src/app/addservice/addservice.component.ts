import { Component, OnInit } from '@angular/core';
import{AutoserviceService} from '../autoservice.service';

@Component({
  selector: 'app-addservice',
  templateUrl: './addservice.component.html',
  styleUrls: ['./addservice.component.css']
})
export class ADDSERVICEComponent implements OnInit {

  constructor(private s1:AutoserviceService) { }

  ngOnInit(): void {
  }
  insertdata(insertform:{value:any;})
  {
    return this.s1.insertdata1(insertform.value).subscribe();
  }

}
