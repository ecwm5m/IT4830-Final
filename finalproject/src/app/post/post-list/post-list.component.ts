import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Post } from '../post.model';
import { PostsService } from '../post.services';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
  posts: Post[] = [];
  private postsSub!: Subscription;

  constructor(public postsService: PostsService) {}

  ngOnInit(): void {
    this.postsService.getPosts();
    this.postsSub = this.postsService.getPostUpdateListener()
      .subscribe((posts: Post[]) =>{
        this.posts = posts;
      });
  }

  onDelete(postId: string | null) {
    if (postId) {
      console.log('postId is not null');
    }
    this.postsService.deletePost(postId ?? '');

    // if (postId) {
    //   this.postsService.deletePost(postId ?? '');
    //   this.posts = this.posts.filter(post => post.id !== postId);
    // } else {
    //   console.log('postId is null');
    // }
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }

}
