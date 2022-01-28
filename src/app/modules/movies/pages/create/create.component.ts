import { Component, OnInit } from '@angular/core';
import {MovieService} from "@core/services/movie.service";
import {Movie} from "@shared/models/movie";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
  }

  create(event: any) {
    console.log(event)
    this.movieService.create(event).subscribe(movie => console.log(movie))
  }
}
