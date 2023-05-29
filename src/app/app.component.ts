import { Component, OnInit } from '@angular/core';
import { Todo } from './models';
import { FormControl } from '@angular/forms';
import { TodoService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'scoot-todo';
  public todos: Todo[] = [];
  public description: FormControl = new FormControl();

  constructor(private _todoService: TodoService) {}

  ngOnInit(): void {
    this._todoService.getTodos()
      .subscribe( todos => {
        this.todos = todos;
      });
  }

  public filterByDescription(): void {
    if (this.description.value === null) return;

    this._todoService.filterByDescription(this.description.value)
      .subscribe((todos: Todo[]) => {
        this.todos = todos;
      })
  }

  public onChange(event: any) {
    const value = event.target.value;
    if (value === 'all') {
      this._todoService.getTodos()
      .subscribe( todos => {
        this.todos = todos;
      });

      return;
    };
    
    this._todoService.filterByPriority(value)
      .subscribe((todos: Todo[]) => {
        this.todos = todos;
      })
  }
  
}
