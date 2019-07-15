import { Component, EventEmitter, OnInit, Output } from '@angular/core';


interface Thought {
  Title: string,
  ThoughtContent: string
}

@Component({
  selector: 'postform',
  templateUrl: './postform.component.html',
  styleUrls: ['./postform.component.css']
})

export class PostFormComponent implements OnInit {

  // newThoughtTitle : string;
  // newThoughtContent : string;

  newThoughtToAdd : Thought = {
    Title: "",
    ThoughtContent: ""
  }

  //////////Need to put an output here to push the new object into the method of the parent

  @Output() 
  newThought = new EventEmitter<Thought>();

  addNewThought() {
    this.newThought.emit(this.newThoughtToAdd)
  }

  showAddPostForm : boolean = false;

  ShowForm() {
    this.showAddPostForm = true;
  };

  HideForm() {
    this.showAddPostForm = false;
  }

  constructor() { }

  ngOnInit() {
  }

}
