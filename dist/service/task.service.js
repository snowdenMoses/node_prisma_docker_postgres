"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
class TaskService {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    async getAllTasks() {
        const tasks = await this.prisma.task.findMany();
    }
    async createTask(payload) {
        const { title, description } = payload;
        const task = await this.prisma.task.create({
            data: {
                title,
                description
            }
        });
    }
    async updateTask(payload, id) {
        const { title, description } = payload;
        const task = await this.prisma.task.update({
            where: { id: parseInt(id) },
            data: { title, description },
        });
        return task;
    }
    async deleteTask(id) {
        const task = await this.prisma.task.delete({
            where: { id: parseInt(id) }
        });
        return task;
    }
}
exports.default = TaskService;
