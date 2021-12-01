import { Component, OnInit } from '@angular/core';
import {Routes} from "@angular/router";
import {Movie} from "../../shared/models/Movie";
import {MovieDescriptionComponent} from "../../shared/components/movie-description/movie-description.component";
import {MatDialog} from "@angular/material/dialog";

const MOVIES: Movie[] = [
  {id:0 ,title:"le seigneur des anneaux", description:"une petite description", coverPath:"/assets/images/le-seigneur-des-anneaux.jpg", imagesPath:[]},
  {id:0 ,title:"le seigneur des anneaux 2", description:"une petite description", coverPath:"/assets/images/le-seigneur-des-anneaux.jpg", imagesPath:[]},
  {id:0 ,title:"FF3", description:"une petite description", coverPath:"/assets/images/le-seigneur-des-anneaux", imagesPath:[]},
  {id:0 ,title:"le seigneur des anneaux", description:"une petite description", coverPath:"/assets/images/le-seigneur-des-anneaux.jpg", imagesPath:[]},
  {id:0 ,title:"le seigneur des anneaux", description:"une petite description", coverPath:"/assets/images/le-seigneur-des-anneaux.jpg", imagesPath:[]},
];


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies = MOVIES

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(MovieDescriptionComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
