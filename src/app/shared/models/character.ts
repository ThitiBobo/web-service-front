import {Movie} from "./movie";
import {Actor} from "./actor";

export class Character{

  id: number
  movieId: number
  actorId: number
  firstname: String
  lastname: String
  movie: Movie
  actor: Actor

  constructor(
    id: number = 0,
    movieId: number = 0,
    actorId: number = 0,
    firstname: String,
    lastname: String,
    movie: Movie,
    actor: Actor
    ) {

    this.id = id
    this.movieId = movieId
    this.actorId = actorId
    this.firstname = firstname
    this.lastname = lastname
    this.movie = movie
    this.actor = actor

  }

}
