import {Component, Input} from '@angular/core';
import {Comment, CommentComponent} from "../comment/comment.component";

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent {
  @Input() post: Post;
}

export class Post {
  privacy: boolean;
  image: string;
  title: string;
  subtitle: string;
  likes: number;
  comments: Comment[];
}
