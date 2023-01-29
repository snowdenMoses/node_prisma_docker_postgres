"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskService = void 0;
const client_1 = require("@prisma/client");
class TaskService {
    constructor() {
        Object.defineProperty(this, "prisma", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new client_1.PrismaClient()
        });
    }
    async getAllTasks() {
        return await this.prisma.task.findMany();
    }
    async createTask(payload) {
        const { title, description } = payload;
        return await this.prisma.task.create({
            data: {
                title,
                description
            }
        });
    }
    async updateTask(payload, id) {
        const { title, description } = payload;
        return await this.prisma.task.update({
            where: { id: parseInt(id) },
            data: { title, description },
        });
    }
    async deleteTask(id) {
        return await this.prisma.task.delete({
            where: { id: parseInt(id) }
        });
    }
}
exports.TaskService = TaskService;
