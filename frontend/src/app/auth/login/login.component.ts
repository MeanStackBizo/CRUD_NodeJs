import { Component } from '@angular/core';
import {User} from "../../Model/User"
import { AuthServiceService } from 'src/app/Service/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  user:User=new User();
  constructor(private AuthServiceService:AuthServiceService){
  }
  
  messageError:String=""
  login(){
      this.AuthServiceService.login({email:this.user.email,password:this.user.password}).subscribe((res:any)=>{
        console.log(res);
      },(error:any)=>{
        console.log(error);
        this.messageError=error.error.message;
      })
     
  }
}
