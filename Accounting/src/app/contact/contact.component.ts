import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import {FormControl, Validators, NgForm, FormGroup, FormBuilder} from '@angular/forms';
import {faMapMarkedAlt} from '@fortawesome/free-solid-svg-icons';
import {faPhoneSquare} from '@fortawesome/free-solid-svg-icons';
import {faEnvelopeOpenText} from '@fortawesome/free-solid-svg-icons';
import {faCalendarAlt} from '@fortawesome/free-solid-svg-icons';
import { User } from './user';
import {EnrollementService} from '../enrollement.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { AngularFireDatabase } from  'angularfire2/database';
import  { Observable } from  'rxjs';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


  faEnvelopeOpenText = faEnvelopeOpenText;
  faCalendarAlt = faCalendarAlt;
  faMapMarkedAlt = faMapMarkedAlt;
  faPhoneSquare = faPhoneSquare;
  submitted = false;
  errorMsg = '';
  showMsg = false;
  itemName = '';
  itemEmail = '';
  itemPhone = '';
  itemMessage = '';
  items: Observable<any[]>;
  contactForm: FormGroup;
  contactFormEmail = new FormControl('', [Validators.required, Validators.email]);
  contactFormName = new FormControl('', [Validators.required]);
  contactFormMessage= new FormControl('', [Validators.required]);
  userModel = new User('' , '' , '' , '' );
    http: any;

  getErrorMessage() {
    return this.contactFormEmail.hasError('required') ? 'You must enter a value' :
        this.contactFormEmail.hasError('email') ? 'Not a valid email' :
            '';
  }

  emailstring= "mailto:dimulskiatanas@gmail.com?Subject=Hello&body=links";


    constructor(private fb: FormBuilder, private _enrollementService: EnrollementService, private db: AngularFireDatabase) {
      this.items = db.list('emails').valueChanges()

      this.contactForm = fb.group({
      contactFormName: ['', Validators.required],
      contactFormEmail: ['', [Validators.required, Validators.email]],
      contactFormPhone: ['', Validators.required],
      contactFormMessage: ['', Validators.required]
        });
     }

  ngOnInit(): void {

  }

  onSubmit()  {
    this.db.list('/emails').push({ name: this.itemName, email: this.itemEmail, phone: this.itemPhone,
       message: this.itemMessage});

      alert('Thank you for contacting us, your message has gone through!')
      // tslint:disable-next-line: align

   }


clearForm() {
   this.contactForm.reset();
 }

  }


