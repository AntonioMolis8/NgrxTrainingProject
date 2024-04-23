import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../../models/interfaces/task.interface';
import { Store } from '@ngrx/store';
import { MyAppState } from '../../store/app.state';
import { ACTIONS } from '../../store/task/task.actions';
import { AsyncPipe} from '@angular/common';
import { Action } from '../../models/interfaces/action.interface';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})

export class TaskListComponent implements OnInit{

  tasks: Observable<Array<Task>>

  constructor(private store: Store<MyAppState>){
    this.tasks = store.select('tasks');
  }

  ngOnInit() {
    this.store.dispatch({type: ACTIONS.GET_TASKS})
  }

  deleteTask(task: Task) {
    let deleteAction: Action = {
      type: ACTIONS.DELETE_TASK,
      payload: task
    }

    this.store.dispatch(deleteAction);
  }
}
