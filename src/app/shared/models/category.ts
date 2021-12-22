import {Color} from "../utils/Color";

export class Category {

  id: number
  name: String
  icon: String
  color: String

  constructor(
    id: number = 0,
    name: String = "sans catégorie",
    icon: String = "default",
    color: String = "#076e77") {

    this.id = id
    this.name = name
    this.icon = icon
    this.color = color
  }

  getColor(): Color {
    return new Color(this.color)
  }
}
