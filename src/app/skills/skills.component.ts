import { Component, OnInit } from '@angular/core';
import { faHtml5,faCss3,faJs,faAngular,faReact,faNodeJs,faGit,faBootstrap,faJava } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  faHtml5 = faHtml5;
  faCss3 = faCss3;
  faBootstrap = faBootstrap;
  faJs =faJs;
  faAngular = faAngular;
  faReact = faReact;
  faNodeJs = faNodeJs;
  faJava = faJava;
  faGit = faGit;
  constructor() { }

  ngOnInit(): void {
  }

}
