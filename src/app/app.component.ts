import { Component, OnInit,HostListener,Inject  } from '@angular/core';
import { trigger,state,transition,style,animate} from '@angular/animations';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[ 
    trigger('fade',
    [ 
      state('void', style({ opacity : 0})),
      transition(':enter',[ animate(300)]),
      transition(':leave',[ animate(500)]),
    ]
)]
})
export class AppComponent {
  title = 'vamsi';
  constructor(@Inject(DOCUMENT) document) { }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
     if (window.pageYOffset > 500) {
       let element = document.getElementById('navbar-sticky');
       element.classList.add('sticky');
     } else {
      let element = document.getElementById('navbar-sticky');
        element.classList.remove('sticky'); 
     }
    }
}
