import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TaskFormPageRoutingModule } from './task-form-routing.module';

import { TaskFormPage } from './task-form.page';

import { TaskListComponent } from '../task-list/task-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TaskFormPageRoutingModule,
    
  ],
  declarations: [TaskFormPage],
})
export class TaskFormPageModule {}
