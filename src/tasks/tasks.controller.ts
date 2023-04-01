import { Controller, Get, Post, Body, Delete, Put, Patch, Param } from '@nestjs/common';
import { TasksService } from './tasks.service'
import { CreateTaskDto, UpdateTaskDto } from './dto/task.dto';

//El controller con ese string será con lo que se hara la peticion http sease /tasks
@Controller('tasks')
export class TasksController {

  constructor(private tasksService: TasksService) { }

  @Get()
  getAllTasks() {
    return this.tasksService.getAllTasks()
  }

  @Post()
  createTask(@Body() newTask: CreateTaskDto) {
    return this.tasksService.createTask(newTask.title, newTask.description);
  }
  // /tasks/:id
  //con el @Param le pasas el parametro y luego lo asignas a una variable definiendole el tipo
  @Delete(':id')
  deleteTask(@Param('id') id: string) {
    this.tasksService.deleteTask(id)
  }

  @Patch(':id')
  updateTasks(@Param('id') id: string, @Body() updatedFields: UpdateTaskDto) {
    return this.tasksService.updateTask(id, updatedFields)
  }

}
