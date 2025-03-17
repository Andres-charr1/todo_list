import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from '@models/task';
import {
  IonList,
  IonCheckbox,
  IonButton,
  IonItem,
  IonLabel,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
  imports: [IonLabel, IonItem, IonList, IonCheckbox, IonButton],
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.taskService.getTasks().subscribe({
      next: (tasks) => {
        this.tasks = tasks;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  deleteTask(id: string | undefined) {
    if (id) this.taskService.deleteTask(id);
  }

  toggleTaskCompletion(task: Task) {}
}
