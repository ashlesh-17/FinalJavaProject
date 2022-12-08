import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FusionComponent } from './fusion/fusion.component';
import { HomeComponent } from './home/home.component';
import { ArchitectureComponent } from './architecture/architecture.component';
import { InteriorComponent } from './interior/interior.component';
import { ServicesComponent } from './services/services.component';
import { AwardsComponent } from './awards/awards.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ADDSERVICEComponent } from './addservice/addservice.component';
import { UpdateserviceComponent } from './updateservice/updateservice.component';
import { DeleteServiceComponent } from './delete-service/delete-service.component';
import { ViewserviceComponent } from './viewservice/viewservice.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FusionComponent,
    HomeComponent,
    ArchitectureComponent,
    InteriorComponent,
    ServicesComponent,
    AwardsComponent,
    AboutusComponent,
    ContactusComponent,
    ADDSERVICEComponent,
    UpdateserviceComponent,
    DeleteServiceComponent,
    ViewserviceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
