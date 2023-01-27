import { Router } from "express";
import TaskController from '../controller/task.controller';

// class TaskRouter {
    const route = Router()
    const taskController = new TaskController()

//     constructor(){
//         this.initializeRouter()
//     }

//     private initializeRouter(){
        route.get('/', taskController.getAllTasks)
        route.post('/', taskController.createTask)
        route.patch('/task/:id', taskController.updateTask)
        route.delete('/task/:id', taskController.deleteTask)
//     }

// }

export default route

