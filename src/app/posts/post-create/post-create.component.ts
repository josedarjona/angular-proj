import { Component, EventEmitter, Output } from '@angular/core';

import { Post } from '../post.model';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post.create.component.css'],
})
export class PostCreateComponent  {
  enteredTitle = '';
  enteredContent = '';
  // newPost = 'NO CONTENT';
  // output lets you read it form parent component
  @Output() postCreated = new EventEmitter<Post>();



  onAddPost(form: NgForm) {
    // console.dir(postInput)

    // this.newPost = this.enteredValue;
    if (form.invalid) {
      return;
    }

    const post: Post = {
      title: form.value.title,
      content: form.value.content,
    };
    this.postCreated.emit(post);

  }

}




