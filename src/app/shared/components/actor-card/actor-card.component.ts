import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Actor} from "../../models/actor";
import {ThemeService} from "@core/services/theme.service";

const DEFAULT_COVER_DARK_THEME = "/assets/svg/default-actor-pic-light.svg";
const DEFAULT_COVER_LIGHT_THEME = "/assets/svg/default-actor-pic-dark.svg";

@Component({
  selector: 'app-actor-card',
  templateUrl: './actor-card.component.html',
  styleUrls: ['./actor-card.component.scss']
})
export class ActorCardComponent implements OnInit {

  @Output() actorClick = new EventEmitter<Actor>();

  @Input() actor: Actor;
  @Input() picturePath: String = "";


  constructor(
    private themeService: ThemeService
  ) {
    this.actor = new Actor(-1, "Acteur introuvable", "", "", null);
    this.setDefaultCover();
  }

  ngOnInit(): void {
  }

  setDefaultCover() {
    if (this.themeService.isDarkMode())
      this.picturePath = DEFAULT_COVER_DARK_THEME
    else
      this.picturePath = DEFAULT_COVER_LIGHT_THEME
  }

  onClick() {
    if (this.actor != undefined)
      this.actorClick.emit(this.actor);
  }
}
