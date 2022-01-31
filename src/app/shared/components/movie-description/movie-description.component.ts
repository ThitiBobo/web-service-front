import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Component, Inject, Input, OnInit} from '@angular/core';
import {ThemeService} from "@core/services/theme.service";
import {Movie} from "@shared/models/movie";
import {Color} from "@shared/utils/Color";
import {hsl2rgb} from "@shared/utils/color-lib";

const DEFAULT_COVER_DARK_THEME = "/assets/svg/desfault-movie-coever-light.svg";
const DEFAULT_COVER_LIGHT_THEME = "/assets/svg/desfault-movie-coever-dark.svg";

const PATH = "/assets/svg/categories/patterns/"
const DEFAULT_ICON = "default"
const EXTENSION = "-pattern.svg"

@Component({
  selector: 'app-movie-description',
  templateUrl: './movie-description.component.html',
  styleUrls: ['./movie-description.component.scss']
})
export class MovieDescriptionComponent implements OnInit {

  @Input() title!: string
  @Input() description!: string
  @Input() coverPath!: string
  @Input() icon: String = DEFAULT_ICON;
  @Input() color = new Color("#4d304c")

  @Input() headbandImagePath: string = "/assets/images/le-seigneur-des-anneaux-detail.jpg";


  gradiant1: Color = new Color();
  gradiant2: Color = new Color();
  gradiant3: Color = new Color();

  maskColor: Color = new Color();

  linearGradiantStyle: String = "";
  categoryBackground: String = "";

  iconPath = PATH + this.icon + EXTENSION;

  constructor(
    private themeService: ThemeService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.title = this.data.movie.title
    this.coverPath = this.data.movie.coverPath
    this.description = this.data.movie.description
    this.icon = this.data.movie.categories[0].icon
    this.color = new Color(this.data.movie.categories[0].color)
    console.log(this.color)
    this.initTemplate()
    console.log(this.data)
  }

  setDefaultCover() {
    if (this.themeService.isDarkMode())
      this.coverPath = DEFAULT_COVER_DARK_THEME
    else
      this.coverPath = DEFAULT_COVER_LIGHT_THEME
  }

  private initTemplate(): void{
    this.gradiant1 = new Color(this.color.getRGB());
    this.gradiant2 = new Color(hsl2rgb(this.color.lightness(this.color.getLightness() + 0.005).getHSL()))
    this.gradiant3 = new Color(hsl2rgb(this.color.lightness(this.color.getLightness() + 0.02).getHSL()))
    this.maskColor = new Color(hsl2rgb(this.color.lightness(this.color.getLightness() + 0.3).getHSL()))

    this.linearGradiantStyle = "background: linear-gradient("
      + "40deg,"
      + this.gradiant1 + " 0%,"
      + this.gradiant2 + " 30%,"
      + this.gradiant3 + " 100%);"

    this.iconPath = PATH + this.icon + EXTENSION;

    this.categoryBackground =
      "background-color: " + this.maskColor + ";" +
      "mask-image: url('" + this.iconPath + "');" +
      "-webkit-mask-image: url('" + this.iconPath + "');"
  }
}
