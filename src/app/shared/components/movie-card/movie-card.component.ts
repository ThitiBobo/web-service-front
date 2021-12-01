import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

const DEFAULT_COVER_DARK_THEME = "/assets/images/dessin-1.svg";
const DEFAULT_COVER_LIGHT_THEME = "/assets/images/dessin-2.svg";

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  @Input() title: String = "";
  @Input() coverPath: String = ""; // default = generic cover

  hasCover:boolean = true

  constructor() { }

  ngOnInit(): void {
  }

  setDefaultCover() {
    this.hasCover = false;
    this.coverPath = DEFAULT_COVER_DARK_THEME;
  }
}
