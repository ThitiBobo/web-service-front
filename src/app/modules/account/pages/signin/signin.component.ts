import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {ErrorStateMatcher} from "@angular/material/core";
import {AlertService} from "../../../../core/services/alert.service";
import {AccountService} from "../../../../core/services/account.service";
import {first} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  submitted = false;
  loading = false;
  returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
    private alertService: AlertService)
  {
    this.returnUrl = "/"
  }

  ngOnInit(): void {
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    if (this.returnUrl == this.router.url){
      this.returnUrl = '/'
    }
  }

  onSubmit(event: any) {

    console.log("submit with output")
    console.log(event)

    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    console.log(this.returnUrl)
    this.loading = true;
    this.accountService.login(event.login, event.password)
      .subscribe(data => {
        this.router.navigate([this.returnUrl])
      })
  }
}
