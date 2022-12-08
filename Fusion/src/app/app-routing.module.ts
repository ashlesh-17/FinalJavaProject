import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ADDSERVICEComponent } from './addservice/addservice.component';
import { ArchitectureComponent } from './architecture/architecture.component';
import { AwardsComponent } from './awards/awards.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DeleteServiceComponent } from './delete-service/delete-service.component';
import { FusionComponent } from './fusion/fusion.component';
import { InteriorComponent } from './interior/interior.component';
import { ServicesComponent } from './services/services.component';
import { UpdateserviceComponent } from './updateservice/updateservice.component';
import { ViewserviceComponent } from './viewservice/viewservice.component';

const routes: Routes = [
  {path: '', component:FusionComponent},
  {path: 'architecture', component:ArchitectureComponent},
  {path: 'interior', component:InteriorComponent},
  {path: 'services', component:ServicesComponent,
  children: 
  [
    {path: 'addservice', component:ADDSERVICEComponent},
    {path: 'updateservice', component:UpdateserviceComponent},
    {path: 'deleteservice', component:DeleteServiceComponent},
    {path: 'viewservice', component:ViewserviceComponent},
  ]
  },
  {path: 'awards', component:AwardsComponent},
  {path: 'aboutus', component:AboutusComponent},
  {path: 'contactus', component:ContactusComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
