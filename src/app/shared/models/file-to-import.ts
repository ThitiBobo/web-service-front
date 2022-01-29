import {Observable} from "rxjs";

export class FileToImport {
  private _type: string
  private _file!: File
  private _promise: Promise<void | Response>


  constructor(base64: string, fileName: string) {
    this._type = base64.toString().substring("data:image/".length, base64.toString().indexOf(";base64"))
    this._promise = fetch(base64)
      .then(res => res.blob())
      .then(blob => {
        this._file = new File([blob], fileName + "." + this._type);
      })
  }


  get type(): string {
    return "image/" + this._type;
  }

  set type(value: string) {
    this._type = value;
  }

  get file(): File {
    return this._file;
  }

  set file(value: File) {
    this._file = value;
  }


  get promise(): Promise<void | Response> {
    return this._promise;
  }
}
