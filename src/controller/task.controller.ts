import { Request, Response, NextFunction } from 'express';
import TaskService from '../service/task.service';

class TaskController {
    private taskService;
    constructor() {
        this.taskService = new TaskService()
    }

    public async getAllTasks(req: Request, res: Response) {
        const tasks = this.taskService.getAllTasks()
        res.json({ tasks: tasks })
    }
    public async createTask(req: Request, res: Response) {
        const task = this.taskService.createTask(req.body)
        res.json({ task: task })
    }
    public async updateTask(req: Request, res: Response) {
        const { id } = req.params
        const task = this.taskService.updateTask(req.body, id)
        res.json({ task: task })
    }
    public async deleteTask(req: Request, res: Response) {
        const { id } = req.params
        const task = this.taskService.deleteTask(id)
        return task
    }
}

export default TaskController;