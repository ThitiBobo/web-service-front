import {Color} from "../utils/Color";

export class Category {

  code: String
  name: String
  icon: String
  color: String

  constructor(
    code: String = 'UK',
    name: String = "sans catégorie",
    icon: String = "default",
    color: String = "#076e77") {

    this.code = code
    this.name = name
    this.icon = icon
    this.color = color
  }

  getColor(): Color {
    return new Color(this.color)
  }
}
