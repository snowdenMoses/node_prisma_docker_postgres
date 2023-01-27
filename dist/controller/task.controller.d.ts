import { Request, Response } from 'express';
declare class TaskController {
    private taskService;
    getAllTasks(req: Request, res: Response): Promise<void>;
    createTask(req: Request, res: Response): Promise<void>;
    updateTask(req: Request, res: Response): Promise<void>;
    deleteTask(req: Request, res: Response): Promise<import(".prisma/client").task>;
}
export default TaskController;
