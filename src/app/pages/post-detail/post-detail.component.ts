import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-detail',
  imports: [],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.css'
})
export class PostDetailComponent {
  postId: string | null = null;
  
  constructor(private route: ActivatedRoute, private postService: PostService) {}

  author: string | undefined = "";
  title: string | undefined = "";
  content: string | undefined = "";

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.postId = params.get("id");
    });

    const res = this.postService.getPostById(Number(this.postId));
    
    this.author = res?.author
    this.title = res?.title
    this.content = res?.content


  }

}
