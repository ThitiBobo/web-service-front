import {Component, Input, OnInit} from '@angular/core';
import {Movie} from "@shared/models/movie";
import {MovieService} from "@core/services/movie.service";
import {AccountService} from "@core/services/account.service";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {MovieDescriptionComponent} from "@shared/components/movie-description/movie-description.component";
import {ActorService} from "@core/services/actor.service";
import {Actor} from "@shared/models/actor";
import {ActorDescriptionComponent} from "@shared/components/actor-description/actor-description.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Input() movies: any[] = []
  @Input() actors: any[] = []
  subscribeMovies: any
  subscribeActors: any
  maxMovies: number = 10;
  maxActors: number = 10;

  constructor(private movieService: MovieService, private actorService: ActorService,
              private accountService: AccountService,
              private router: Router,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.subscribeMovies = this.movieService.list().subscribe(response => {
      var arrLength = response.length;
      if(arrLength > this.maxMovies){
        response.splice( 0, this.maxMovies);
      }
      this.movies = response.map(item => new Movie(item.id, item.title, item.description, item.coverPath))
    })
    this.subscribeActors = this.actorService.list().subscribe(response => {
      var arrLength = response.length;
      if(arrLength > this.maxActors){
        response.splice( 0, this.maxActors);
      }
      this.actors = response.map(item => new Actor(item.id, item.firstname, item.lastname, "", null))
    })

  }

  ngOnDestroy() {
    this.subscribeMovies.unsubscribe();
    this.subscribeActors.unsubscribe();
  }

  openMovie(id: any) {

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


  openActor($event: any) {
    const dialogRef = this.dialog.open(ActorDescriptionComponent, {
      panelClass: 'custom-dialog-container',
      data: {
        actor: $event
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
