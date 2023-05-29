import { Injectable } from '@angular/core';
import { TODO_DATA, Todo } from '../models';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() {}
  
  private getData(): Todo[] {
    return TODO_DATA;
  }

  public getTodos(): Observable<Todo[]> {
    return of(this.getData());
  }

  public addTodo(todo: Todo): void {
    todo.id = Math.floor(Math.random() * 100);
    todo.completed = false;
  
    TODO_DATA.push(todo);
  }

  public filterByDescription(value: string): Observable<Todo[]> {
    const filteredTodos = this.getData().filter(todo => todo.description.toLowerCase().includes(value.toLowerCase()));

    return of(filteredTodos);
  }

  public filterByPriority(value: string) {
    const filteredTodos = this.getData().filter(todo => todo.priority === value);

    return of(filteredTodos);
  }
  
}
