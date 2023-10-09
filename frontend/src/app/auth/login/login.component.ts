import { Component, OnInit } from '@angular/core';
import {User} from "../../Model/User"
import { AuthServiceService } from 'src/app/Service/auth-service.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  ngOnInit(): void {
      this.ActivatedRoute.queryParams.subscribe((res:any)=>{
         this.messageError=res['message']
      })
      setTimeout(()=>{
        this.messageError="";
        this.Router.navigate([''])
      },3000);
  }
  user:User=new User();
  constructor(private AuthServiceService:AuthServiceService,private Router:Router,private ActivatedRoute:ActivatedRoute){
  }
  
  messageError:String=""
  login(){
      this.AuthServiceService.login({email:this.user.email,password:this.user.password}).subscribe((res:any)=>{
        console.log(res);
        this.Router.navigate(['/profile'])
      },(error:any)=>{
        console.log(error);
        this.messageError=error.error.message;
      })
     
  }
}
