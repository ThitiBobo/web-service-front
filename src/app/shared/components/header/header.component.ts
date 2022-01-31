import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {AccountService} from "../../../core/services/account.service";
import {Router} from "@angular/router";
import {User} from "../../models/user";
import {Observable} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input() connected = false;
  @Input() username!: string;

  constructor(private router: Router,
              private accountService: AccountService) {
    this.accountService.user.subscribe((nextValue) => {
      this.connected = nextValue != null  // this will happen on every change
      if (nextValue != null) {
        this.username = nextValue.username
      }
    })
  }

  onAuthClick(event: String) {
    console.log(event)
    if (event == 'logout') {
      this.accountService.logout()
      this.connected = false;
    }

    if (event == 'login') {
      this.router.navigate(['/auth/login']);
    }

    if (event == 'register') {
      this.router.navigate(['/auth/register']);
    }
  }

    onLogoutClick() {

    }
}
