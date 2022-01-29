import {Component, OnInit} from '@angular/core';
import {MovieService} from "@core/services/movie.service";
import {Movie} from "@shared/models/movie";
import {ImageService} from "@core/services/image.service";
import {FileToImport} from "@shared/models/file-to-import";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(
    private router: Router,
    private movieService: MovieService,
    private imageService: ImageService) {
  }

  ngOnInit(): void {
  }

  create(event: Movie) {
    // TODO l'exemple parfait d'un code caca
    // TODO utiliser la même variable pour deux choses ca pue d'avnace
    const movie: Movie = event
    if (movie.coverPath != null) {
      let file = new FileToImport(movie.coverPath, movie.title)
      file.promise.then(response => {
        console.log(response)
        console.log(file)
        this.imageService.upload(file).subscribe(res => {
          movie.coverPath = "images/" + res.fileName
          this.movieService.create(movie).subscribe(data => {
            this.router.navigate(['/movies'])
          })
        })
      })
    } else {
      this.movieService.create(movie).subscribe(data => this.router.navigate(['/movies']))
    }

  }
}
