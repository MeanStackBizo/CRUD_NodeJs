import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(private formBuilder:FormBuilder,private http:HttpClient){
    this.RegisterForm=this.formBuilder.group(
      {  
        name:[''],
        email:[''],
        password:[''],
        cin:[''],
      }
    );
  }

  imageError:String=""
  image:String="";

  onFileChanged(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.image = reader.result as string;
    };
    if(this.image.length>0){
      this.imageError="";
    }
  }

  RegisterForm:FormGroup

  FileUpload(event:any){
    //this.RegisterForm.value['photo']=event.target.files[0];
    this.onFileChanged(event);
  }
  
   Register(){
    /*const formdata=new FormData();7
    formdata.append('image', this.RegisterForm.value['photo']);*/
          this.http.post("http://localhost:3000/node/user/signup",{
            name:this.RegisterForm.value['name'],
            email:this.RegisterForm.value['email'],
            password:this.RegisterForm.value['password'],
            cin:this.RegisterForm.value['cin'],
            photo:this.image
          }).subscribe((res)=>{
              console.log(res);
          },(error)=>{
            console.log(error);
          })
     
  }
}