import { Component, OnInit } from '@angular/core';
import { faSlack,faFacebook,faInstagram,faLinkedin } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  faSlack = faSlack;
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faLinkedin = faLinkedin;
 
  constructor() { }

  ngOnInit(): void {
  }

}
