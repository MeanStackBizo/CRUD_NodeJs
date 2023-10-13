import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consultebook',
  templateUrl: './consultebook.component.html',
  styleUrls: ['./consultebook.component.scss']
})
export class ConsultebookComponent implements OnInit{

   constructor(private http:HttpClient){
      this.pagination = {
         currentpage: 1,  
         nextpage: 0,
         prevpage: 0,
         total: 0,
         per_page: 5,
       };
   }
   
   ngOnInit(): void {
       this.GetAllBook();
       setInterval(()=>this.Load=false,3000);
   }
    pagination:{
      currentpage:number,
      nextpage:number,
      prevpage:number,
      total:number,
      per_page:number,
    };
    Load:Boolean=true;
    search:String="";
    paginationPages: number[] = [];
    Books:any=[];

   GetAllBook(){
      this.http.get(`http://localhost:3000/node/allBooks?page=${this.pagination.currentpage}&size=${this.pagination.per_page}&${this.search!='' ? 'search='+this.search : ''} `)
   .subscribe((res:any)=>{
         this.pagination.currentpage=res.page;
         this.pagination.total=res.pages;
         this.pagination.per_page=res.limit;   
         this.Books=res.docs;
         // Make All Pages In Tab for loop ( like Principe Thymleaf )
         this.paginationPages = Array.from({ length: this.pagination.total }, (_, i) => i + 1);
         console.log(res);
      })
   }

   changePages(page){
      this.pagination.currentpage=page;
      this.GetAllBook();
   }

   DeleteBook(id,name){
      if(confirm("do you wanna delete "+name)){
         this.http.delete("http://localhost:3000/node/DeleteById/"+id).subscribe((res:any)=>{
            this.GetAllBook();
         })
      }
   }

   

}
