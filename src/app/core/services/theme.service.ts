import { Injectable } from '@angular/core';

const LOCAL_STORAGE_KEY = "dark-mode"

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private darkMode: boolean = false;

  constructor() {
    console.log("contructor")
    if (!(localStorage.getItem(LOCAL_STORAGE_KEY) === null)) {
      console.log("localstrorage == true")
      let value = localStorage.getItem(LOCAL_STORAGE_KEY)
      if (typeof value === "string") {
        this.darkMode = JSON.parse(value) === true
      }
    }
  }

  isDarkMode(): boolean{
    return this.darkMode;
  }

  switchTheme(){
    this.darkMode = !this.darkMode;
    localStorage.setItem(LOCAL_STORAGE_KEY, String(this.darkMode));
  }
}
