import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { InterceptorService } from './Service/interceptor.service';
import { ProfileComponent } from './profile/profile.component';
import { IsAuthGuard } from './guard/is-auth.guard';
import { ConsultebookComponent } from './Books/consultebook/consultebook.component';
import { AddBookComponent } from './Books/add-book/add-book.component';
import { InfoBookComponent } from './Books/info-book/info-book.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ConsultebookComponent,
    AddBookComponent,
    InfoBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
    
  ],
  providers: [
    IsAuthGuard,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:InterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
