import {Component, Input} from '@angular/core';

@Component({
  selector: 'comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})

export class CommentComponent {
  @Input() comment: Comment;
}

export class Comment {
  by: string;
  comment: string;
}
