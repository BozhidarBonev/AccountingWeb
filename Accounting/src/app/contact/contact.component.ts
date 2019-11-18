import { Component, OnInit, ViewChild } from '@angular/core';
import {FormControl, Validators, NgForm} from '@angular/forms';
import {faMapMarkedAlt} from '@fortawesome/free-solid-svg-icons';
import {faPhoneSquare} from '@fortawesome/free-solid-svg-icons';
import {faEnvelopeOpenText} from '@fortawesome/free-solid-svg-icons';
import {faCalendarAlt} from '@fortawesome/free-solid-svg-icons';
import { User } from './user';
import {EnrollementService} from '../enrollement.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @ViewChild('f', {static: false})  public signupForm: NgForm;
  faEnvelopeOpenText = faEnvelopeOpenText;
  faCalendarAlt = faCalendarAlt;
  faMapMarkedAlt = faMapMarkedAlt;
  faPhoneSquare = faPhoneSquare;
  submitted = false;
  errorMsg = '';
  showMsg = false;

  email = new FormControl('', [Validators.required, Validators.email]);
  name = new FormControl('', [Validators.required]);
userModel = new User('' , '' , '' , '' );

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }
  constructor(private _enrollementService: EnrollementService){}

  ngOnInit() {
  }
  onSubmit() {

    this._enrollementService.enroll(this.userModel)
    .subscribe(
      data => console.log('Succes', data),
      error => console.error('Error!', error)
    );
    this.showMsg = true;
    console.log(this.signupForm.value);
    this.signupForm.resetForm();


  }


}
