import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Color} from "../../../../shared/utils/Color";
import {CategoryService} from "../../../../core/services/category.service";
import {Observable, share} from "rxjs";
import {Category} from "../../../../shared/models/category";
import {Router} from "@angular/router";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit{

  @Input() categories: any[] = []
  subscribe: any

  constructor(private categoryService: CategoryService,
              public router: Router) { }

  ngOnInit(): void {
    this.subscribe = this.categoryService.list().subscribe(response => {
      this.categories = response.map(item => new Category(item.code, item.name, item.icon, item.color))
    })

  }

  onCategoryClick($event: any) {
    console.log($event)
    this.categoryService.setSelectedCategory($event.code)
    this.categoryService.setSelectedCategoryName($event.categoryName)
    this.router.navigate(['categories',$event.category])
  }

  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }

}
