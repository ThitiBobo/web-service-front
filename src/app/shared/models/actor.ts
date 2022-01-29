
export class Actor{

  id: number
  firstname: String
  lastname: String
  bio: String
  picturePath: String | null
  birthDate: String

  imagesPath: String[]

  constructor(
    id: number = 0,
    firstname: String,
    lastname: String,
    bio: String = "",
    picturePath: String | null,
    birthDate: String = "",
    imagesPath: String[] = []) {

    this.id = id
    this.firstname = firstname
    this.lastname = lastname
    this.bio = bio
    // TODO crasseux
    this.picturePath = (picturePath != null) ? 'http://localhost:8080/' + picturePath : null
    this.birthDate = birthDate
    this.imagesPath = imagesPath
  }

}
