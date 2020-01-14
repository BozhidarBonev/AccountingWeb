import { Component, OnInit } from '@angular/core';
import { faBook} from '@fortawesome/free-solid-svg-icons';
import { faPiggyBank } from '@fortawesome/free-solid-svg-icons';
import { faCommentDollar } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  faBook = faBook  ;
  faPiggyBank = faPiggyBank  ;
  faCommentDollar = faCommentDollar ;
  constructor() { }

  ngOnInit() {
  }

}
