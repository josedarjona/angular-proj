import { Component, OnInit } from '@angular/core';

// import { Post } from '../post.model';
import { NgForm } from '@angular/forms';
import { PostsService } from '../posts.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Post } from '../post.model';



@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post.create.component.css'],
})
export class PostCreateComponent implements OnInit {
  enteredTitle = '';
  enteredContent = '';
  post: Post;
  private mode = 'create';
  private postId: string;
  // newPost = 'NO CONTENT';
  // output lets you read it form parent component
  // @Output() postCreated = new EventEmitter<Post>();

  constructor (public postsService: PostsService, public route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('postId')) {

        this.mode = 'edit';
        this.postId = paramMap.get('postId');
        this.postsService.getPost(this.postId)
          .subscribe(postData => {
            this.post = { id: postData._id, title: postData.title, content: postData.content };
          });

      } else {
        this.mode = 'create';
        this.postId = null;
      }
    });
  }

  onSavePost(form: NgForm) {
    // console.dir(postInput)

    // this.newPost = this.enteredValue;
    if (form.invalid) {
      return;
    }

    if (this.mode === 'create') {
      this.postsService.addPosts(form.value.title, form.value.content);
    } else {
      this.postsService.updatePost(this.postId, form.value.title, form.value.content);
    }

    // const post: Post = {
    //   title: form.value.title,
    //   content: form.value.content,
    // };
    // this.postCreated.emit(post);
      // this.postsService.addPosts(form.value.title, form.value.content);
      form.resetForm();
  }

}





