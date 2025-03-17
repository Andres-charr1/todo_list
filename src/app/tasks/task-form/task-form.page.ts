import { Component } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from '@models/task';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.page.html',
  styleUrls: ['./task-form.page.scss'],
  standalone: false,
})
export class TaskFormPage {
  task: Task = { title: '', description: '', date: new Date(), done: false };

  constructor(private taskService: TaskService) {}

  saveTask() {
    if (this.task.title && this.task.description) {
      this.taskService.addTask(this.task);
      this.task = { title: '', description: '', date: new Date(), done: false };
    }
  }

  iniDate() {
    return new Date().toISOString();
  }
}
