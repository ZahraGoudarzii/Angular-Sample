import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InsertedTask } from './task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) userId!: string;
  isAddingTask = false;

  constructor(private tasksService: TasksService) {}
  get selectedUserTask() {
    return this.tasksService.getSelectedUserTask(this.userId);
  }
  onStartAddTask() {
    this.isAddingTask = true;
  }
  onCloseTask() {
    this.isAddingTask = false;
  }
}
