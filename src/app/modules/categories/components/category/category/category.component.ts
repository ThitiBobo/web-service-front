import {Component, Input, OnInit} from '@angular/core';
import {MovieService} from "../../../../../core/services/movie.service";
import {MatDialog} from "@angular/material/dialog";
import {Movie} from "../../../../../shared/models/movie";
import {MovieDescriptionComponent} from "../../../../../shared/components/movie-description/movie-description.component";
import {CategoryService} from "../../../../../core/services/category.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  @Input() movies: any[] = []
  subscribe: any
  categoryCode!: String
  categoryName!: String

  constructor(private movieService: MovieService,
              private categoryService: CategoryService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.categoryCode = this.categoryService.getSelectedCategory()
    this.categoryName = this.categoryService.getSelectedCategoryName()
    this.subscribe = this.movieService.getByCategory(this.categoryCode).subscribe(response => {
      this.movies = response.map(item => new Movie(item.id, item.title, item.description, item.coverPath))
    })

  }

  openDialog($event: any) {
    const dialogRef = this.dialog.open(MovieDescriptionComponent, { panelClass: 'custom-dialog-container' });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`)

    });
  }

  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }

}
