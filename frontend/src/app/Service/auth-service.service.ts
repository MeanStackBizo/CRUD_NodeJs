import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
 
   public isLoggedIn:Boolean =false;
   constructor(private http:HttpClient) { }

   login(user:any){
    return this.http.post('http://localhost:3000/node/user/login',user).pipe(
      tap((res:any)=>{
        this.isLoggedIn=true;
      })
    )
   }

   
}
