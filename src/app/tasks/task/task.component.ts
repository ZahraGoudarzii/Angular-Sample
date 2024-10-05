import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { Task } from '../task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  // @Output() complete = new EventEmitter<string>();
  private tasksService = inject(TasksService);
  onComplete() {
    // this.complete.emit()
    this.tasksService.removeTask(this.task.id);
  }
}
