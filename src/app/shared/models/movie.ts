import {environment} from "@env/environment";

export class Movie{

  id!: number
  title: string
  description: string
  coverPath: string
  duration: number
  releaseDate: string

  imagesPath: string[]

  constructor(
    id: number | undefined,
    title: string,
    description: string = "",
    coverPath: string = "",
    duration: number = 0,
    releaseDate: string = "",
    imagesPath: string[] = []) {

    if (id != null) this.id = id
    this.title = title
    this.description = description
    // TODO crasseux
    this.coverPath = environment.apiUrl + '/' + coverPath
    this.duration = duration
    this.releaseDate = releaseDate
    this.imagesPath = imagesPath
  }
}
