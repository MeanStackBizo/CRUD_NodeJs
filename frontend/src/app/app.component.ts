import { HttpClient } from '@angular/common/http';
import { Component ,OnInit} from '@angular/core';
import  AOS from "aos"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'frontend';
  ngOnInit(): void {
    AOS.init();
   }
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
