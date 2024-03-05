import { HttpClient } from '@angular/common/http';;
import { Injectable, inject } from '@angular/core';
import { Post } from '../interfaces/post.type=interface';
import { firstValueFrom } from 'rxjs';
@Injectable({
  providedIn: 'root'
})


export class PostServices {

  httpClient = inject(HttpClient)


  private BaseUrl: string = 'https://my-json-server.typicode.com/mariogiron/blog-server/posts';

  getAll(): Promise<Post[]>{
    return firstValueFrom(
    this.httpClient.get<Post[]>(this.BaseUrl)
    )
  }

  getById(id:number){
     this.getAll()
    
  }

 
}
