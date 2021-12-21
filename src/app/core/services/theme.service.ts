import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private darkMode: boolean = false;

  constructor() { }

  isDarkMode(): boolean{
    return this.darkMode;
  }

  switchTheme(){
    this.darkMode = !this.darkMode;
  }
}
