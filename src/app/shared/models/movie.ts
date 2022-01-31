import {environment} from "@env/environment";
import {Category} from "@shared/models/category";

export class Movie{

  id!: number
  title: string
  description: string
  coverPath: string
  duration: number
  releaseDate: string
  private _categories!: Category[]

  imagesPath: string[]

  constructor(
    id: number | undefined,
    categories: Category[],
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
    this.categories = categories
  }


  get categories(): Category[] {
    return this._categories;
  }

  set categories(value: Category[]) {
    this._categories = value;
  }
}
