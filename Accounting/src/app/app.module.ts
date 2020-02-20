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
import {MatCardModule, MatButtonModule, MatIconModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSliderModule} from '@angular/material/slider';
/*ADDITIONAL*/
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';
import {  MatSidenavModule, MatListModule } from '@angular/material';
import { HashLocationStrategy, LocationStrategy  } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AccountingServicesComponent,
    AboutUsComponent,
    ContactComponent
  ],
  imports: [
    MatCardModule,
    FontAwesomeModule,
    MatToolbarModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule ,
    AnimateOnScrollModule.forRoot() ,
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatSliderModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
     MatListModule

  ],
  providers: [{provide: LocationStrategy,
    useClass:HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
