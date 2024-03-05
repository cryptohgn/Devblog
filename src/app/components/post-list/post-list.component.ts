import { Component, inject } from '@angular/core';
import { Post } from 'src/app/interfaces/post.type=interface';
import { PostServices } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  
  allPost: Post[] = [];

  servicePost = inject(PostServices);

  async ngOnInit(){
    let response = await this.servicePost.getAll();
    this.allPost = response;
    //console.log(this.allPost)
  }

}
