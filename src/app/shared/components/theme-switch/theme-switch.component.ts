import {Component, Inject} from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-theme-switch',
  templateUrl: './theme-switch.component.html',
  styleUrls: ['./theme-switch.component.scss']
})
export class ThemeSwitchComponent {

  private static readonly DARK_THEME_CLASS = 'dark-theme';
  public darkMode: boolean = false

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.darkMode = this.document.documentElement.classList.contains(ThemeSwitchComponent.DARK_THEME_CLASS)
  }

  toggle() {
    this.darkMode = !this.darkMode;
    this.darkMode? this.selectDarkTheme(): this.selectLightTheme();
  }

  public selectDarkTheme(): void {
    this.document.documentElement.classList.add(ThemeSwitchComponent.DARK_THEME_CLASS);
  }

  public selectLightTheme(): void {
    this.document.documentElement.classList.remove(ThemeSwitchComponent.DARK_THEME_CLASS);
  }
}
