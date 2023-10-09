import { Component } from '@angular/core';
import { AuthServiceService } from '../Service/auth-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  
    constructor(private AuthServiceService:AuthServiceService){
        this.getUser();
    }
    User:any;
    getUser(){
      this.AuthServiceService.getUser().subscribe((res:any)=>{
           this.User=res.message.user;
      })
    }
}
