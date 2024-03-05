import { Component } from '@angular/core';
import { Post } from 'src/app/interfaces/post.type=interface';
import { Input } from '@angular/core'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() arrPost: Post[] = [];

  postCard!: Post;

  ngOnInit(){
    this.arrPost.forEach(post => {
      this.postCard = post;
    });
  }

}
