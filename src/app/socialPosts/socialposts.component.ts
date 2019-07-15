import { Component, OnInit } from '@angular/core';

interface Thought {
  Title: string,
  ThoughtContent: string
}

@Component({
  selector: 'socialposts', 
  templateUrl: './socialposts.component.html',
  styleUrls: ['./socialposts.component.css'],
})

export class SocialPostsComponent implements OnInit {

  PageTitle : string = "~~~~ My Thoughts ~~~~";

  MyThoughts : Thought[] = [
    {
      Title: "Dog",
      ThoughtContent: "I like dogs."
    },
    {
      Title: "Jonah",
      ThoughtContent: "I definitely hope Jonah likes the work I did for this lab. He helped me get the output working, so I hope he's excited about the work I did"
    },
    {
      Title: "Cat",
      ThoughtContent: "I do not much like cats. There is only one cat I like. It is Garfield."
    }
  ]

  addThoughtToList(event) {
    this.MyThoughts.splice(0, 0, event);
  };

  deleteItem(i) {
    this.MyThoughts.splice(i, 1)
  }

  constructor() { }

  ngOnInit() {
  }

}
