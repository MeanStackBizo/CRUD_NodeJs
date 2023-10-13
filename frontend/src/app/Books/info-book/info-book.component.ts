import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-info-book',
  templateUrl: './info-book.component.html',
  styleUrls: ['./info-book.component.scss']
})
export class InfoBookComponent {
  constructor(private ActivatedRoute:ActivatedRoute,private http:HttpClient){

  }

  ngOnInit(): void {
      this.ActivatedRoute.params.subscribe((res)=>{
          this.getBook(res['id']);
      })
  }

  book:any;

  getBook(id){
    this.http.get("http://localhost:3000/node/getById/"+id).subscribe((res:any)=>{
       this.book=res;
    })
  }
}
