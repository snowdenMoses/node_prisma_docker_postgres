import { PrismaClient } from '@prisma/client';

class TaskService{
    private prisma = new PrismaClient()
    
    public async getAllTasks (){
        const tasks = await this.prisma.task.findMany()
    }
    public async createTask (query: any){
        const { title, description} = query
        const task = await this.prisma.task.create({
            data: {
                title,
                description
            }
        })
    }
    public async updateTask(query: any, id: any) {
        const { title, description } = query
        const task = await this.prisma.task.update({
            where: { id: parseInt(id) },
            data: { title, description },
        })
        return task
    }
    public async deleteTask(id: any) {
        const task = await this.prisma.task.delete({
            where: { id: parseInt(id) }
        })
        return task
    }
}

export default TaskService;