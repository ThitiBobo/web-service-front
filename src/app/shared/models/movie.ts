
export class Movie{

  id: number
  title: String
  description: String
  coverPath: String

  imagesPath: String[]

  constructor(
    id: number = 0,
    title: String,
    description: String = "",
    coverPath: String = "",
    imagesPath: String[] = []) {

    this.id = id
    this.title = title
    this.description = description
    this.coverPath = coverPath
    this.imagesPath = imagesPath
  }

}
