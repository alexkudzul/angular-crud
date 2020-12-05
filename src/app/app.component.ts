import { Component } from '@angular/core';

import { Post } from './models/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selectedPost: Post = new Post(); // Post vacio

  postArray: Post[] = [
    {id: 1, title: 'Post 1', content: "Content Post 1"},
    {id: 2, title: 'Post 2', content: "Content Post 2"},
    {id: 3, title: 'Post 3', content: "Content Post 3"}
  ];

  addOrEdit(){
    // Si no hay ningun id seleccionado, se ejecuta Add
    if(this.selectedPost.id === 0){
      this.selectedPost.id = this.postArray.length + 1;
      this.postArray.push(this.selectedPost);
    }

    this.selectedPost = new Post(); // Limpia los inputs
  }

  openForEdit(post: Post){
    this.selectedPost = post;
  }

  // El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.
  // filter() recorre cada item del arreglo
  // x => Por cada elemento que se recorra, si cada elemento es distinto al Post seleccionado, se deja tal cual
  delete(){
    if(confirm('Are you sure you want to delete it')){
      this.postArray = this.postArray.filter( x => x != this.selectedPost); // quita un elemento del array
      this.selectedPost = new Post(); // Limpia los inputs
    }
  }

}
