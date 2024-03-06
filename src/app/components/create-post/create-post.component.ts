import { Component, inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Post } from 'src/app/interfaces/post.type=interface';
import { PostServices } from 'src/app/services/posts.service';
import Swal from'sweetalert2';

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
      text: new FormControl("", []),
      author: new FormControl("", []),
      publishDate: new FormControl(Date, [])
    }, [])
  }

  // llamamos al servicio a una funcion que hare el post
  // para ello hay que injectarlo
  // hay que hacer una nueva variable donde guarar el nuevo post

  async postDataPost(){
    try{
      this.newPost = this.formPost.value;
      let response = await this.servicePost.insertPost(this.newPost)
    Swal.fire({
      title: "Revisa los datos",
      html: `
      <h3 class="text-primary">${this.newPost.title}</h3>
      <p>${this.newPost.text}</p>
    `,
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Gaurdar",
      denyButtonText: `Volver`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Guardado!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Los cambios no se han guardado", "", "info");
      }
    });

    } catch {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Algo fue mal",
        denyButtonText: `Volver`
      });
    }

  }
}
