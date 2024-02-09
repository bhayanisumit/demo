import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ FormsModule,
    ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email:string = "";
  password:string = "";
  constructor(private router : Router){

  }
  login(){

    if(this.email === "admin" && this.password === "admin"){
      localStorage.setItem("token" , "abc");
      this.router.navigate(['dashboard']);
    }else {
      console.log('login flase');
    }


  }
}
