import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Color} from "../../shared/utils/Color";
import {CategoryService} from "../../core/services/category.service";
import {Observable, share} from "rxjs";
import {Category} from "../../shared/models/category";

const CATEGORIES = [
  {color: new Color('#770752'), categoryName: "Action", icon: "action"},
  {color: new Color('#1f5da2'), categoryName: "Histoire", icon: "history"},
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
export class CategoriesComponent implements OnInit{

  @Input() categories: any[] = []
  subscribe: any

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.subscribe = this.categoryService.list().subscribe(response => {
      this.categories = response.map(item => new Category(item.id, item.name, item.icon, item.color))
    })

  }

  onCategoryClick($event: String) {
    console.log($event)
  }

  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }

}
