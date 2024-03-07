import { Component, EventEmitter, Output } from '@angular/core';
import { Post } from 'src/app/interfaces/post.type=interface';
import { Input } from '@angular/core'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() unPost!: Post;
  @Output() idPost: EventEmitter<number> = new EventEmitter();

  id: number = 0;

  handleFav(idP:number){
    this.id = idP;
    this.idPost.emit(this.id)
    // console.log(this.id)
  }

}


// pasos para lleva el elemento a favs
// 1 - Crear output del id
// Creamos la funcion que envia el emit
