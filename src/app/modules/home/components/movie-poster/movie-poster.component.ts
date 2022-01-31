import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ThemeService} from "@core/services/theme.service";


const DEFAULT_COVER_DARK_THEME = "/assets/svg/desfault-movie-coever-light.svg";
const DEFAULT_COVER_LIGHT_THEME = "/assets/svg/desfault-movie-coever-dark.svg";

@Component({
  selector: 'app-movie-poster',
  templateUrl: './movie-poster.component.html',
  styleUrls: ['./movie-poster.component.scss']
})
export class MoviePosterComponent implements OnInit {

  @Output() movieClick = new EventEmitter<Number>()

  @Input() id: number = 0;
  @Input() title: String = "";
  @Input() coverPath: String = ""; // default = generic cover

  hasCover:boolean = true

  constructor(private themeService: ThemeService,) {
    this.setDefaultCover();
  }

  ngOnInit(): void {
  }

  setDefaultCover() {
    this.hasCover = false;
    if (this.themeService.isDarkMode())
      this.coverPath = DEFAULT_COVER_DARK_THEME
    else
      this.coverPath = DEFAULT_COVER_LIGHT_THEME
  }

  onClick() {
    this.movieClick.emit(this.id);
  }
}
