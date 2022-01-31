import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Character} from "../../models/character";
import {Movie} from "../../models/movie";

const DEFAULT_COVER_DARK_THEME = "/assets/svg/desfault-movie-coever-light.svg";
const DEFAULT_COVER_LIGHT_THEME = "/assets/svg/desfault-movie-coever-dark.svg";

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss']
})
export class CharacterCardComponent implements OnInit {

  @Output() movieClick = new EventEmitter<Movie>()

  @Input() character: Character | undefined;
  @Input() movie: Movie | undefined;
  @Input() coverPath: String = ""; // default = generic cover

  constructor() {
    this.setDefaultCover();
  }

  ngOnInit(): void {
    console.log("this.character");
    console.log(this.character);
  }

  setDefaultCover() {
    this.coverPath = DEFAULT_COVER_DARK_THEME;
  }

  onClick() {
    this.movieClick.emit(this.movie);
  }

}
