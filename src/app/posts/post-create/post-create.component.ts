import { Component } from '@angular/core';

// import { Post } from '../post.model';
import { NgForm } from '@angular/forms';
import { PostsService } from '../posts.service';



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
  // @Output() postCreated = new EventEmitter<Post>();

  constructor (public postsService: PostsService) {}

  onAddPost(form: NgForm) {
    // console.dir(postInput)

    // this.newPost = this.enteredValue;
    if (form.invalid) {
      return;
    }

    // const post: Post = {
    //   title: form.value.title,
    //   content: form.value.content,
    // };
    // this.postCreated.emit(post);
      this.postsService.addPosts(form.value.title, form.value.content);
  }

}





