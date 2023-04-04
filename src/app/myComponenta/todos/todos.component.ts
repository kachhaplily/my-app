import { Component, OnInit } from '@angular/core';
import { Todo } from '../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],

})
export class TodosComponent implements OnInit{
  todos:Todo[];
  constructor(){
    this.todos=[
      {

      title:"this is lily",
      desc:"hello desc1",
      active:true

    },
    {

      title:"this is abc",
      desc:"hello desc1",
      active:true

    },
    {

      title:"this is xyz",
      desc:"hello desc1",
      active:false

    }
  ]
  }

  ngOnInit(): void {

  }
  deletetodo(todo:Todo){
    console.log(todo)
    const index =this.todos.indexOf(todo);
    this.todos.splice(index,1)
  }
  addtodo(todo:Todo){
    this.todos.push(todo)
  }
}
