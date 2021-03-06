/*INITIAL*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AccountingServicesComponent } from './accounting-services/accounting-services.component';
/*ANGULAR-MARTERIAL*/
import {MatToolbarModule} from '@angular/material/toolbar';

/*ADDITIONAL*/
import { ReactiveFormsModule } from '@angular/forms';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule }    from '@angular/common/http';
import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AccountingServicesComponent,
    AboutUsComponent,
    ContactComponent
  ],
  imports: [
    MatToolbarModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule ,
    AnimateOnScrollModule ,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
