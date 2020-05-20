import { Component } from '@angular/core';
import {faMapMarkedAlt} from '@fortawesome/free-solid-svg-icons';
import {faPhoneSquare} from '@fortawesome/free-solid-svg-icons';
import {faEnvelopeOpenText} from '@fortawesome/free-solid-svg-icons';
import {faCalendarAlt} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  faEnvelopeOpenText = faEnvelopeOpenText;
  faCalendarAlt = faCalendarAlt;
  faMapMarkedAlt = faMapMarkedAlt;
  faPhoneSquare = faPhoneSquare;

  title = 'Accounting';
}
