import {Component, Inject, Input, OnInit} from '@angular/core';
import {Actor} from "../../models/actor";
import {ActorService} from "../../../core/services/actor.service";
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {CharacterService} from "../../../core/services/character.service";
import {MovieDescriptionComponent} from "../movie-description/movie-description.component";
import {Character} from "../../models/character";

const DEFAULT_COVER_DARK_THEME = "/assets/svg/default-actor-pic-light.svg";
const DEFAULT_COVER_LIGHT_THEME = "/assets/svg/default-actor-pic-dark.svg";

@Component({
  selector: 'app-actor-description',
  templateUrl: './actor-description.component.html',
  styleUrls: ['./actor-description.component.scss']
})
export class ActorDescriptionComponent implements OnInit {

  @Input() actor: Actor = new Actor(-1, "Acteur introuvable", "", "", null);
  @Input() characters: any[] = [];
  subscribe: any;
  picturePath: String = "";


  constructor(private characterService: CharacterService, public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) data: any ) {
    this.actor = data.actor;
    this.setDefaultCover();

  }

  setDefaultCover() {
    this.picturePath = DEFAULT_COVER_DARK_THEME;
  }

  ngOnInit(): void {
    this.subscribe = this.characterService.getByActor(this.actor.id).subscribe(response => {
      this.characters = response.map(item => new Character(item.id, item.movieId, item.actorId, item.firstname, item.lastname, item.movie, item.actor));
      this.characters.forEach(character => character.movie.coverPath = 'http://localhost:8080/' + character.movie.coverPath) // PAS OUF
      console.log(this.characters);
    });

  }


  openDialog($event: any) {
    const dialogRef = this.dialog.open(MovieDescriptionComponent, {
      panelClass: 'custom-dialog-container',
      data: {
        movie: $event.movie
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
