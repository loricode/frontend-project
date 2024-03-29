import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';

//service 
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,  MatCardModule,  MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  public miVariable = "Esta es mi variable";

  authForm = this.formBuilder.group({
    'email':[""], 
    'password':[""]
  })

  //se inyecta el formBuilder
  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder) {}


   login = () => {
    //de esta clase loginComponent
     //this.authForm.value
     this.authService.login().then((res:any) => {
      console.log(res)
     })
      console.log("click", this.authForm.value)
   }

}
