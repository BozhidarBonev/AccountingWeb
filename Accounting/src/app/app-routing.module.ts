import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AccountingServicesComponent } from './accounting-services/accounting-services.component';

const routes: Routes = [
  {path: 'aboutus', component: AboutUsComponent},
  {path: 'services', component: AccountingServicesComponent },
  {path: 'contact', component: ContactComponent},
  {path: 'home', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
