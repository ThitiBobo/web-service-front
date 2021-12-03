import { Component, OnInit } from '@angular/core';
import {Color} from "../../shared/utils/Color";

const CATEGORIES = [
  {color: new Color('#770752'), categoryName: "Action", icon: "action"},
  {color: new Color('#073b77'), categoryName: "Histoire", icon: "history"},
  {color: new Color('#077721'), categoryName: "Aventure", icon: "adventure"},
  {color: new Color('#773607'), categoryName: "Horror", icon: "horror"},
  {color: new Color('#076e77'), categoryName: "Action", icon: "drama"},
  {color: new Color('#77071c'), categoryName: "Action", icon: "animation"},
  {color: new Color('#776807'), categoryName: "Action", icon: "war"},
]

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories = CATEGORIES;

  constructor() { }

  ngOnInit(): void {
  }

  onCategoryClick($event: String) {
    console.log($event)
  }
}
