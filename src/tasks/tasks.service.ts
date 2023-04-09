import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './tasks.entity';
import { v4 } from 'uuid';
import { UpdateTaskDto } from './dto/task.dto';

@Injectable()
export class TasksService {
    private tasks: Task[] = [
        {
            id: '1',
            title: 'First Task',
            description: 'Some Task',
            status: TaskStatus.IN_PROGRESS
        }
    ]
    getAllTasks() {
        return this.tasks;
    }
    createTask(title: string, description: string) {
        const newTask = {
            id: v4(),
            title,
            description,
            status: TaskStatus.PENDING
        };
        this.tasks.push(newTask);
        return newTask;
    }
    getTaskById(id: string): Task {
        return this.tasks.find(task => task.id === id)
    }

    deleteTask(id: string) {
        this.tasks = this.tasks.filter((task) => task.id !== id);
    }

    updateTask(id: string, updatedFields: UpdateTaskDto) {
        const task = this.getTaskById(id);
        const newTask = Object.assign(task, updatedFields);
        this.tasks = this.tasks.map(task => task.id === id ? newTask : task);

        return newTask;
    }
}
