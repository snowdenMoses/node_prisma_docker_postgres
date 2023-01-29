import { PrismaClient } from '@prisma/client';

class TaskService {
    private prisma = new PrismaClient()
    
    public async getAllTasks (){
        return await this.prisma.task.findMany()

    }
    public async createTask (payload: any){
        const { title, description } = payload
        return await this.prisma.task.create({
            data: {
                title,
                description
            }
        })
    }
    public async updateTask(payload: any, id: any) {
        const { title, description } = payload
        return await this.prisma.task.update({
            where: { id: parseInt(id) },
            data: { title, description },
        })
    }
    public async deleteTask(id: any) {
        return await this.prisma.task.delete({
            where: { id: parseInt(id) }
        })
    }
}

export { TaskService };