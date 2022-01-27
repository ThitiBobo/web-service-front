import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ActorService} from "../../core/services/actor.service";
import {Actor} from "../../shared/models/actor";
import {MovieDescriptionComponent} from "../../shared/components/movie-description/movie-description.component";
import {ActorDescriptionComponent} from "../../shared/components/actor-description/actor-description.component";

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.scss']
})
export class ActorsComponent implements OnInit {

  @Input() actors: any[] = []
  subscribe: any

  constructor(private actorService: ActorService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.subscribe = this.actorService.list().subscribe(response => {
        this.actors = response.map(item => new Actor(item.id, item.firstname, item.lastname, "", null))
    })
  }

  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }

  openDialog($event: any) {
    const dialogRef = this.dialog.open(ActorDescriptionComponent, {
      panelClass: 'custom-dialog-container',
      data: {
        actor: $event
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
