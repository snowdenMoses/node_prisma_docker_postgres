import { Request, Response, NextFunction } from 'express';
import { TaskService } from '../service/task.service';

class TaskController {
    private taskService = new TaskService()

    public getAllTasks = async (req: Request, res: Response) => {
        const tasks = await this.taskService.getAllTasks()
        res.json({ tasks: tasks })
    }
    public createTask = async (req: Request, res: Response) => {
        const task = await this.taskService.createTask(req.body)
        res.json({ task: task })
    }
    public updateTask = async (req: Request, res: Response) => {
        const { id } = req.params
        const task = await this.taskService.updateTask(req.body, id)
        res.json({ task: task })
    }
    public deleteTask = async (req: Request, res: Response) => {
        const { id } = req.params
        const task = await this.taskService.deleteTask(id)
        return task
    }
}

export default TaskController;