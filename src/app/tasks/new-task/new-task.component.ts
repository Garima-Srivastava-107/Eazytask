import { Component, EventEmitter, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
add = output<NewTaskData>();
cancel=output<boolean>();
enteredTitle = signal('');
enteredSummary = signal('');
enteredDate = signal('');
onCancelBtn(){
  this.cancel.emit(false);
}
onSubmit(){
  this.add.emit({title: this.enteredTitle(), summary:this.enteredSummary(),date: this.enteredDate()});
}
}
