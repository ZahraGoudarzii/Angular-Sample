import {
  Component,
  EventEmitter,
  inject,
  Input,
  Output,
  signal,
} from '@angular/core';
import { InsertedTask } from '../task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css'],
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() close = new EventEmitter<void>();
  // @Output() add = new EventEmitter<InsertedTask>();

  onCancel() {
    this.close.emit();
  }
  // Two way Binding without signal:
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';
  // Two way Binding with signal:
  // enteredTitle = signal('');
  // enteredSummary = signal('');
  // enteredDate = signal('');
  private tasksService = inject(TasksService);

  onSubmit() {
    //handling with Output
    // this.add.emit({
    //   title: this.enteredTitle,
    //   summary: this.enteredSummary,
    //   dueDate: this.enteredDate,
    // });

    //handling with Service
    this.tasksService.addTask(
      {
        title: this.enteredTitle,
        summary: this.enteredSummary,
        dueDate: this.enteredDate,
      },
      this.userId
    );
    this.close.emit();
  }
}
