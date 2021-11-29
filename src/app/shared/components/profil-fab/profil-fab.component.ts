import { Component, OnInit } from '@angular/core';
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";


@Component({
  selector: 'app-profil-fab',
  templateUrl: './profil-fab.component.html',
  styleUrls: ['./profil-fab.component.scss']
})
export class ProfilFabComponent implements OnInit {

  faUser = faUser;

  constructor() { }

  ngOnInit(): void {
  }

}
