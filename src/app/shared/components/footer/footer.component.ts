import { Component, OnInit } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const GITHUB_ACCOUNTS = [
  {nameTag: "aubresson", link:"https://github.com/aubresson"},
  {nameTag: "AlexandreMoine", link:"https://github.com/AlexandreMoine"},
  {nameTag: "ThitiBobo", link:"https://github.com/ThitiBobo"},
];

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  github_accounts = GITHUB_ACCOUNTS;
  faGithub = faGithub;

  constructor() { }

  ngOnInit(): void {
  }

}
