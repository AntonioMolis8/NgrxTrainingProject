import { Component } from '@angular/core';
import { User } from '../../models/user.interface';
import { FormsModule} from '@angular/forms';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [FormsModule, NgIf, RouterLink],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {

  public user: User = {isLogged: false} as User;

  private isUsernameOk : boolean = false;
  private isPasswordOk : boolean = false;

  public usernameAlert : string = "";
  public passwordAlert : string = "";

  public route: string = "";

  checkUsername() {
    if(this.user.name){
      this.isUsernameOk = true;
      this.usernameAlert = ""
    } else {
      this.isUsernameOk = false;
      this.usernameAlert = "*Introduce the name."
    }
  }

  checkPassword() {
    if (this.user.password) {
      if (this.user.password.length >= 8) {
        this.isPasswordOk = true;
        this.passwordAlert = "";
      } else {
        this.isPasswordOk = false;
        this.passwordAlert = "Password must be at least 8 characters."
      }
    } else {
      this.isPasswordOk = false;
      this.passwordAlert = "*Introduce the password."
    }
  }

  login() {
    this.checkUsername();
    this.checkPassword();

    if (this.isUsernameOk && this.isPasswordOk) {
      this.route = "/home";
      this.user.isLogged = true;
    }
  }

}
