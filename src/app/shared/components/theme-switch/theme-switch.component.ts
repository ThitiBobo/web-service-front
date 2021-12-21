import {Component, Inject} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {ThemeService} from "../../../core/services/theme.service";

@Component({
  selector: 'app-theme-switch',
  templateUrl: './theme-switch.component.html',
  styleUrls: ['./theme-switch.component.scss']
})
export class ThemeSwitchComponent {

  private static readonly DARK_THEME_CLASS = 'dark-theme';

  constructor(@Inject(DOCUMENT) private document: Document, public service: ThemeService) {
    service.isDarkMode()? this.selectDarkTheme(): this.selectLightTheme();
  }

  toggle() {
    this.service.switchTheme();
    this.service.isDarkMode()? this.selectDarkTheme(): this.selectLightTheme();
  }

  public selectDarkTheme(): void {
    this.document.documentElement.classList.add(ThemeSwitchComponent.DARK_THEME_CLASS);
  }

  public selectLightTheme(): void {
    this.document.documentElement.classList.remove(ThemeSwitchComponent.DARK_THEME_CLASS);
  }
}
