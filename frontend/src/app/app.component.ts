import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';

  constructor(private http:HttpClient){}
  
  image: any ;

  onFileChanged(event:any){
    this.image=event.target.files[0];
  }
  AddPhoto(){ 
    const formData = new FormData();
    formData.append('image', this.image);
    this.http.post('http://127.0.0.1:5000/api/upload',formData).subscribe((res)=>{
      console.log(res);
    },(error)=>{
      console.log(error);
    })
  }

}
