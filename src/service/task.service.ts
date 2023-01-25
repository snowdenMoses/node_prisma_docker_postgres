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
        const { title } = query
        const task = await this.prisma.task.update({
            where: { id: parseInt(id) },
            data: { title },
        })
        return task
    }
}