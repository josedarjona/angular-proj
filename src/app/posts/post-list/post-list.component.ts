import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { PostsService } from '../posts.service';
import { Subscription } from 'rxjs';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})


export class PostListComponent implements OnInit, OnDestroy {
  // posts = [
  //   {
  //     title: 'First Post',
  //     content: 'this is first post'
  //   },
  //   {
  //     title: 'second Post',
  //     content: 'this is second post'
  //   },
  //   {
  //     title: 'third Post',
  //     content: 'this is third post'
  //   }
  // ];
  // @Input()  posts = [];

  posts: Post[] = [];
  private postsSub: Subscription;


  constructor(public postsService: PostsService) {}

  ngOnInit() {
    // this.posts = this.postsService.getPosts();
    this.postsService.getPosts();
    this.postsSub = this.postsService.getPostUpdateListener()
      .subscribe((posts: Post[]) => {

        this.posts = posts;

      });

  }

  onDelete(postId: string) {
    this.postsService.deletePost(postId);
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }

}

