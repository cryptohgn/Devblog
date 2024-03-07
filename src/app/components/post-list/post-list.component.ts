import { Component, Input, inject } from '@angular/core';
import { Post } from 'src/app/interfaces/post.type=interface';
import { PostServices } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {

  
  @Input() filtPost: Post[] = []; 

  formSearch: string = '';
  
  allPost: Post[] = [];

  postFav!:any;

  arrFavs: Post[] = [];

  servicePost = inject(PostServices);
  
  async ngOnInit(){
    let response = await this.servicePost.getAll();
    this.allPost = response;
    //console.log(this.allPost)
  }

  async buscarPost() {
   
    this.allPost = this.allPost.filter((post) =>
      post.title.toLocaleLowerCase().includes(this.formSearch.toLocaleLowerCase())
    );
  }

  resetPost(){
    this.formSearch = "";
    this.ngOnInit()
  }

  idForFav($event: number){
    this.postFav = this.allPost.find((post) =>
      post.id == $event);
    this.arrFavs.push(this.postFav)
    console.log(this.arrFavs)
    
  }


}
