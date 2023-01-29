import { Router } from "express";
import TaskController from '../controller/task.controller';

class TaskRouter {
    private route = Router()
    private taskController = new TaskController()

    constructor(){
        this.initializeRouter()
    }

    private initializeRouter = () => {
        this.route.get('/', this.taskController.getAllTasks)
        this.route.post('/', this.taskController.createTask)
        this.route.patch('/task/:id', this.taskController.updateTask)
        this.route.delete('/task/:id', this.taskController.deleteTask)
    }

}

export default TaskRouter

