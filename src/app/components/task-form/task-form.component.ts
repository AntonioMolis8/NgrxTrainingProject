import { Component } from '@angular/core';
import { Task } from '../../models/task.interface';
import { Store } from '@ngrx/store';
import { MyAppState } from '../../store/app.state';
import { Action } from '../../models/action.interface';
import { ACTIONS } from '../../store/task/task.actions';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.scss'
})

export class TaskFormComponent {

  task: Task = {} as Task;

  constructor(private store: Store<MyAppState>) {}

  addTask(task:Task) {
    let addAction:Action = {
      type: ACTIONS.ADD_TASK,
      payload: Object.assign({},task)
    }

    this.store.dispatch(addAction);
  }
}
