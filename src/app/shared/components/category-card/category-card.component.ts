import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Color} from "../../utils/Color";
import {hsl2rgb} from "../../utils/color-lib";

const PATH = "/assets/svg/categories/patterns/"
const DEFAULT_ICON = "default"
const EXTENSION = "-pattern.svg"


@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss']
})
export class CategoryCardComponent implements OnInit, OnChanges {

  @Output() categoryClick = new EventEmitter<String>()

  @Input() color = new Color("#4d304c")
  @Input() categoryName: String = "Autre"
  @Input() icon: String = DEFAULT_ICON;

  gradiant1: Color = new Color();
  gradiant2: Color = new Color();
  gradiant3: Color = new Color();

  maskColor: Color = new Color();

  linearGradiantStyle: String = "";
  categoryBackground: String = "";

  iconPath = PATH + this.icon + EXTENSION;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    this.initTemplate();
  }

  ngOnInit(): void {
    this.initTemplate();
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

  onClick() {
    this.categoryClick.emit(this.categoryName);
  }
}
