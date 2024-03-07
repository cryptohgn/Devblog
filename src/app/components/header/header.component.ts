import { Component, EventEmitter, Output, inject } from '@angular/core';
import { Post } from 'src/app/interfaces/post.type=interface';
import { PostServices } from 'src/app/services/posts.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
 

  formSearch: string = '';
  arrPost: Post[] = [];
  myPosts: Post[] = [];

  servivePost = inject(PostServices);

  
}
