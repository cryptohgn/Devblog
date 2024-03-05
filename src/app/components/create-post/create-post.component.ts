import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {

   formPost: FormGroup;

  constructor() {
    this.formPost = new FormGroup({
      title: new FormControl("", []),
      text: new FormControl(0, []),
      author: new FormControl("", []),
      publishDate: new FormControl(Date, [])
    }, [])
  }

  getDataPost(){
    
  }

}
