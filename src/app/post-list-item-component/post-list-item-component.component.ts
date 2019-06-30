import { Component,Input,  OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.css']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() postContent:string;
@Input() postTitle:string;
postLoveIts:number = 0;
postCreatedAt = new Date();

  constructor() { }

  getPostContent() {
    return this.postContent;
  }

  getPostTitle() {
    return this.postTitle;
}


  ngOnInit() {
  }


addLove(){
  this.postLoveIts = this.postLoveIts + 1;
  console.log(this.postLoveIts)
}

removeLove(){
  this.postLoveIts = this.postLoveIts - 1;
  console.log(this.postLoveIts)
}
}
