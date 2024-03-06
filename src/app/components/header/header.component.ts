import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { Post } from 'src/app/interfaces/post.type=interface';
import { PostServices } from 'src/app/services/posts.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  formSearch: string = "";
  arrPost: Post[] = [];
  myPost!: Post;
  
  servivePost = inject(PostServices)

  async buscarPost(){
    console.log(this.formSearch)
    let response = await this.servivePost.getAll();
    this.arrPost = response;
    
  }

  // ngOnInit() {
  //   this.activatedRoute.params.subscribe(async (params: any) => {
  //     let id = params.id
  //     let response = await this.servicePost.getAll();
  //     this.myArrPost = response;
  //     console.log(this.myArrPost)
  //     this.myPost = this.myArrPost.find((post)=> post.id == id)
  //     console.log(this.myPost)
  //   })
  // }

}
