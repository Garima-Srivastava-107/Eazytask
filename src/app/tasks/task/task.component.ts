import { Component, Input, output } from '@angular/core';

type Task={
  id: string,
    userId: string,
    title: string,
    summary: string,
    dueDate: string,
};
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
@Input({required:true}) task!:Task;
complete = output<string>();
onCompleteTask(){
this.complete.emit(this.task.id);
}
}
