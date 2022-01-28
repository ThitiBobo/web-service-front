import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Component, Inject, Input, OnInit} from '@angular/core';
import {ThemeService} from "@core/services/theme.service";

const DEFAULT_COVER_DARK_THEME = "/assets/svg/desfault-movie-coever-light.svg";
const DEFAULT_COVER_LIGHT_THEME = "/assets/svg/desfault-movie-coever-dark.svg";

@Component({
  selector: 'app-movie-description',
  templateUrl: './movie-description.component.html',
  styleUrls: ['./movie-description.component.scss']
})
export class MovieDescriptionComponent implements OnInit {

  @Input() title!: string
  @Input() description!: string
  @Input() coverPath!: string


  constructor(
    private themeService: ThemeService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.title = this.data.movie.title
    this.coverPath = this.data.movie.coverPath
    this.description = this.data.movie.description
    console.log(this.data.title)
  }

  setDefaultCover() {
    if (this.themeService.isDarkMode())
      this.coverPath = DEFAULT_COVER_DARK_THEME
    else
      this.coverPath = DEFAULT_COVER_LIGHT_THEME
  }
}
