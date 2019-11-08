import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import{faMapMarkedAlt} from'@fortawesome/free-solid-svg-icons';
import{faPhoneSquare} from'@fortawesome/free-solid-svg-icons';
import{faEnvelopeOpenText} from'@fortawesome/free-solid-svg-icons';
import{faCalendarAlt} from'@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  faMapMarkedAlt=faMapMarkedAlt;
  faPhoneSquare=faPhoneSquare;
  faEnvelopeOpenText=faEnvelopeOpenText;
  faCalendarAlt=faCalendarAlt;
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }
  constructor() { }

  ngOnInit() {
  }

}
