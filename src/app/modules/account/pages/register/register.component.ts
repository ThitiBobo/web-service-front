import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MyErrorStateMatcher} from "../../components/login-form/login-form.component";
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm, ValidationErrors, ValidatorFn,
  Validators
} from "@angular/forms";
import {ErrorStateMatcher} from "@angular/material/core";
import {ActivatedRoute, Router} from "@angular/router";
import {AccountService} from "../../../../core/services/account.service";
import {AlertService} from "../../../../core/services/alert.service";
import {first} from "rxjs";
import {User} from "../../../../shared/models/user";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  returnUrl: string;
  hide = true;
  matcher = new RegisterErrorStateMatcher();

  constructor(private route: ActivatedRoute,
              private router: Router,
              private accountService: AccountService,
              private alertService: AlertService) {
    this.returnUrl = "/"
  }

  registerForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),

    password: new FormControl('', [Validators.required, Validators.min(3)]),

  });


  get emailInput() {
    return this.registerForm.get('email');
  }

  get passwordInput() {
    return this.registerForm.get('password');
  }

  get usernameInput() {
    return this.registerForm.get('username');
  }

  ngOnInit(): void {
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    if (this.returnUrl == this.router.url){
      this.returnUrl = '/'
    }
  }

  onSubmit() {
    console.log(this.registerForm.value)

    let user = new User();
    user.username = this.registerForm.value.username;
    user.email = this.registerForm.value.email;
    user.password = this.registerForm.value.password;
    this.accountService.register(user)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.alertService.error(error);
        });
  }


}

export class RegisterErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
