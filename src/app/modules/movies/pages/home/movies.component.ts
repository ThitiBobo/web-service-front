import {Component, Input, OnInit} from '@angular/core';
import {Router, Routes} from "@angular/router";
import {Movie} from "@shared/models/movie";
import {MovieDescriptionComponent} from "@shared/components/movie-description/movie-description.component";
import {MatDialog} from "@angular/material/dialog";
import {Category} from "@shared/models/category";
import {CategoryService} from "@core/services/category.service";
import {MovieService} from "@core/services/movie.service";
import {AccountService} from "@core/services/account.service";


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  @Input() movies: any[] = []
  subscribe: any

  constructor(private movieService: MovieService,
              private accountService: AccountService,
              private router: Router,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.subscribe = this.movieService.list().subscribe(response => {
      this.movies = response.map(item => new Movie(item.id, item.title, item.description, item.coverPath))
    })

  }

  openDialog(id: any) {

    let movie = this.movies.find( i => i.id == id)
    const dialogRef = this.dialog.open(
      MovieDescriptionComponent,
      {
        panelClass: 'custom-dialog-container',
        data: {
          movie: movie
        }
      });
  }

  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }

  hasRight(): Boolean {
    if (this.accountService.userValue == null) return false
    return this.accountService.userValue.roles.find(item => item == "ROLE_ADMIN" || item == "ROLE_MODERATOR") != null
  }

  addMovie() {
    if (this.hasRight())
      this.router.navigate(['/movies/new']);
  }
}
