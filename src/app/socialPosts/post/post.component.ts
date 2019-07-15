import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

interface Thought {
  Title: string,
  ThoughtContent: string
}

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input()
  post: Thought;

  @Output()
  itemToDelete = new EventEmitter<null>();

  DeleteThought() {
    this.itemToDelete.emit();
  };

  constructor() { }

  ngOnInit() {
  }

}
