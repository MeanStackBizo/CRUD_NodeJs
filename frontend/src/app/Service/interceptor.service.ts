import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
     let tokenReq=req.clone({
        setHeaders:{
          Authorization:`Bearer ${localStorage.getItem("token")}`
        }
     });
     return next.handle(tokenReq);
  }
}
