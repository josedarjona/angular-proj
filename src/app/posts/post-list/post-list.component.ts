import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent {
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
  @Input()  posts = [];

}

