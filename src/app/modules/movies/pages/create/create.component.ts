import { Component, OnInit } from '@angular/core';
import {MovieService} from "@core/services/movie.service";
import {Movie} from "@shared/models/movie";
import {ImageService} from "@core/services/image.service";
import {FileToImport} from "@shared/models/file-to-import";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(private movieService: MovieService, private imageService: ImageService) { }

  ngOnInit(): void {
  }

  create(event: Movie) {
    const movie: Movie = event
    let file = new FileToImport(movie.coverPath, movie.title)
    file.promise.then(response => {
      console.log(response)
      console.log(file)
      this.imageService.upload(file).subscribe(res => {
        movie.coverPath = "images/" + res.fileName
        this.movieService.create(movie).subscribe()
      })
    })
  }
}
