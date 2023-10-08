import { Component } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(private formBuilder:FormBuilder){
    this.RegisterForm=this.formBuilder.group(
      {  
        name:[''],
        email:[''],
        password:[''],
        cin:[''],
        photo:['']
      }
    );
  }

  RegisterForm:FormGroup
  
  Register(){
    console.log(this.RegisterForm.value);
  }
}