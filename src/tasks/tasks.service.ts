import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.entity';
import { v4 } from 'uuid';
import { UpdateTaskDto } from './dto/task.dto';

@Injectable()
export class TasksService {
  //Simulación base de datos
  private tasks: Task[] = [
    {
      id: '1',
      title: 'first task',
      description: 'some task',
      status: TaskStatus.PENDING,
    },
  ];

  //modulo uuid para generar ids con la funcion v4()
  getAllTasks() {
    return this.tasks;
  }

  getTasksById(id: string): Task {
    return this.tasks.find(task => task.id === id)
  }

  createTask(title: string, description: string) {
    const task = {
      id: v4(),
      title,
      description,
      status: TaskStatus.PENDING
    }
    this.tasks.push(task);

    return task;
  }

  //Object.assign(x,y) funcion de javascript para fusionar parametros de un objeto
  //los parametros del segundo objeto escrito se sobreescribirian al primer objeto
  updateTask(id: string, updateFields: UpdateTaskDto) {
    const task = this.getTasksById(id)
    const newTask = Object.assign(task, updateFields)
    this.tasks = this.tasks.map(task => task.id === id ? newTask : task)
    return newTask
  }

  deleteTask(id: string) {
    this.tasks = this.tasks.filter(task => task.id !== id)
  }
}
