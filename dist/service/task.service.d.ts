declare class TaskService {
    private prisma;
    getAllTasks(): Promise<void>;
    createTask(payload: any): Promise<void>;
    updateTask(payload: any, id: any): Promise<import(".prisma/client").task>;
    deleteTask(id: any): Promise<import(".prisma/client").task>;
}
export default TaskService;
