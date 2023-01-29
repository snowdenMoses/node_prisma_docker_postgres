declare class TaskService {
    private prisma;
    getAllTasks(): Promise<import(".prisma/client").task[]>;
    createTask(payload: any): Promise<import(".prisma/client").task>;
    updateTask(payload: any, id: any): Promise<import(".prisma/client").task>;
    deleteTask(id: any): Promise<import(".prisma/client").task>;
}
export { TaskService };
