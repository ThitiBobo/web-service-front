import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ErrorStateMatcher} from "@angular/material/core";
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {MyErrorStateMatcher} from "@modules/account/components/login-form/login-form.component";
import {Router} from "@angular/router";
import {Movie} from "@shared/models/movie";

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.scss']
})
export class MovieFormComponent {

  @Output() movie = new EventEmitter<Movie>();

  matcher = new MovieFormErrorStateMatcher();

  title: any;
  actionButton: any = "Créer"

  imagePickerConf: ImagePickerConf = {
    borderRadius: '4px',
    language: 'en',
    width: '320px',
    height: '240px',
  };

  movieForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    subTitle: new FormControl(),
    description:new FormControl(),
    coverPath: new FormControl(),
    duration:new FormControl(),
    releaseDate:new FormControl(),
    backgroundImagePath:new FormControl(),
  });

  constructor(private router: Router) {
  }


  onSubmit() {
    this.movie.emit(this.movieForm.value);
  }

  onImageChange(event: any) {
    this.movieForm.value.coverPath = event
  }

  cancel() {
    this.router.navigate(['/movies'])
  }
}

export class MovieFormErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

export interface ImagePickerConf {
  width?: string;
  height?: string;
  borderRadius?: string;
  compressInitial?: boolean;
  language?: string;
}
