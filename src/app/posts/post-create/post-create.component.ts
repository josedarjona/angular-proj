import { Component, EventEmitter, Output } from '@angular/core';


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
  @Output() postCreated = new EventEmitter();



  onAddPost() {
    // console.dir(postInput)

    // this.newPost = this.enteredValue;

    const post = {
      title: this.enteredTitle,
      content: this.enteredContent,
    };
    this.postCreated.emit(post);

  }

}





