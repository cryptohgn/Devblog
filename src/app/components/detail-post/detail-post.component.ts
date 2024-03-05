import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interfaces/post.type=interface';
import { PostServices } from 'src/app/services/posts.service';

@Component({
  selector: 'app-detail-post',
  templateUrl: './detail-post.component.html',
  styleUrls: ['./detail-post.component.css']
})
export class DetailPostComponent {

  myArrPost: Post[] = []; 
  myPost!: Post | undefined;
  id: number = 0;
  servicePost = inject(PostServices)
  activatedRoute = inject(ActivatedRoute)

  ngOnInit() {
    this.activatedRoute.params.subscribe(async (params: any) => {
      let id = params.id
      let response = await this.servicePost.getAll();
      this.myArrPost = response;
      console.log(this.myArrPost)
      this.myPost = this.myArrPost.find((post)=> post.id == id)
      console.log(this.myPost)
    })
  }

}
