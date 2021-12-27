
export class Movie{

  id: number
  title: String
  description: String
  coverPath: String
  duration: number
  releaseDate: String

  imagesPath: String[]

  constructor(
    id: number = 0,
    title: String,
    description: String = "",
    coverPath: String = "",
    duration: number = 0,
    releaseDate: String = "",
    imagesPath: String[] = []) {

    this.id = id
    this.title = title
    this.description = description
    // TODO crasseux
    this.coverPath = 'http://localhost:8080/' + coverPath
    this.duration = duration
    this.releaseDate = releaseDate
    this.imagesPath = imagesPath
  }

}
