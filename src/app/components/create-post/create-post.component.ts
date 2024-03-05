import { Component, inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Post } from 'src/app/interfaces/post.type=interface';
import { PostServices } from 'src/app/services/posts.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {

   formPost: FormGroup;
   newPost!: Post;
   servicePost = inject(PostServices)

  constructor() {
    this.formPost = new FormGroup({
      title: new FormControl("", []),
      text: new FormControl(0, []),
      author: new FormControl("", []),
      publishDate: new FormControl(Date, [])
    }, [])
  }

  // llamamos al servicio a una funcion que hare el post
  // para ello hay que injectarlo
  // hay que hacer una nueva variable donde guarar el nuevo post

  async postDataPost(){
    this.newPost = this.formPost.value;
    let respones = await this.servicePost.insertPost(this.newPost)
    
  }

}
