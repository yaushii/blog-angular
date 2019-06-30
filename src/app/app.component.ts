import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';


  posts = [
    {
     title: 'Mon 1er Post',
     content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem soluta nostrum, aliquam libero repellat nulla dolore nam sunt perspiciatis eaque et! Similique quis, ipsa tenetur ullam dolorem voluptatum reprehenderit laudantium.',
   } ,
   {
     title: 'Mon 2em Post',
     content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem soluta nostrum, aliquam libero repellat nulla dolore nam sunt perspiciatis eaque et! Similique quis, ipsa tenetur ullam dolorem voluptatum reprehenderit laudantium.',
   },
   {
     title: 'Mon 3em Post',
     content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem soluta nostrum, aliquam libero repellat nulla dolore nam sunt perspiciatis eaque et! Similique quis, ipsa tenetur ullam dolorem voluptatum reprehenderit laudantium.',
   } ,
]
}
