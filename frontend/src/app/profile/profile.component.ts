import { Component } from '@angular/core';
import { AuthServiceService } from '../Service/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  
    constructor(private AuthServiceService:AuthServiceService,private Router:Router){
        this.getUser();
    }
    User:any;
    getUser(){
      this.AuthServiceService.getUser().subscribe((res:any)=>{
           this.User=res?.message[0];
      })
    }

    logout(){
      localStorage.clear();
      this.Router.navigate([''])
    }

}
