import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormControl,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {


  ngOnInit(): void {
      this.ActivatedRoute.params.subscribe((res:any)=>{
          if(res['id']!=-1){
              this.IsUpdated=true;
              this.IdBook=res['id'];
              this.getBook(res['id']);
          }
      })
  }
    IsUpdated:Boolean=false;
    IdBook:number;
    constructor(private ActivatedRoute:ActivatedRoute, private formbuilder:FormBuilder,private http:HttpClient,private router:Router){

      this.bookFrom=this.formbuilder.group({
          title:this.titleRegister,
          author:this.authorRegister,
          price:this.priceRegister,
          publishingDate:this.DateRegister,
      });

    }

    getBook(id){
      this.http.get("http://localhost:3000/node/getById/"+id).subscribe((res:any)=>{
        this.populateForm(res);
      })
    }

    populateForm(bookData: any) {
      this.bookFrom.patchValue({
        title: bookData.title,
        author: bookData.author,
        price: bookData.price,
        publishingDate: bookData.publishingDate
      });
    }

    titleRegister=new FormControl('',[Validators.required]);
    authorRegister=new FormControl('',[Validators.required]);
    priceRegister=new FormControl('',[Validators.required]);
    DateRegister=new FormControl('',[Validators.required]);

    AddBook(){
      if(this.bookFrom.valid){
         if(this.IsUpdated){
          this.http.put("http://localhost:3000/node/UpdateBYId/"+this.IdBook,this.bookFrom.value).subscribe((res:any)=>{
              this.router.navigate(["/books"]);
         })
         }else{
          this.http.post("http://localhost:3000/node/AddBook",this.bookFrom.value).subscribe((res:any)=>{
            this.router.navigate(["/books"]);
         })
         }
      }else[
        this.bookFrom.markAllAsTouched()
      ]
    }

    bookFrom:FormGroup

}
