import { Component ,OnInit,EventEmitter,Output} from '@angular/core';
import { Todo } from '../Todo';

@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.css']
})
export class AddtodoComponent implements OnInit{
  title:string="";
  desc:string="";
  @Output() "todoAdd":EventEmitter<Todo>= new EventEmitter();

  constructor(){

  }
  ngOnInit(): void {

  }
  onSubmit(){
    const todo={
      title:this.title,
      desc :this.desc,
      active:true
    }
    this.todoAdd.emit(todo)
  }
}
