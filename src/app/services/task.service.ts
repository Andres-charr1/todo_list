import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';

import { Observable } from 'rxjs';
import { Task } from '@models/task';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private collectionName = 'tasks';

  constructor(private firestore: AngularFirestore, private store: Firestore) {}

  getTasks(): Observable<Task[]> {
    return this.firestore
      .collection<Task>(this.collectionName)
      .valueChanges({ idField: 'id' });
  }

  async addTask(task: Task): Promise<void> {
    await addDoc(collection(this.store, this.collectionName), task);
    /*const id = this.firestore.createId();
    return this.firestore
      .collection(this.collectionName)
      .doc(id)
      .set({ ...task });*/
  }

  updateTask(task: Task): Promise<void> {
    return this.firestore
      .collection(this.collectionName)
      .doc(task.id)
      .update(task);
  }

  deleteTask(id: string): Promise<void> {
    return this.firestore.collection(this.collectionName).doc(id).delete();
  }
}
