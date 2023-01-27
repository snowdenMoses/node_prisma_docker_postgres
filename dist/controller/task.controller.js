"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const task_service_1 = __importDefault(require("../service/task.service"));
class TaskController {
    constructor() {
        this.taskService = new task_service_1.default();
    }
    async getAllTasks(req, res) {
        const tasks = this.taskService.getAllTasks();
        res.json({ tasks: tasks });
    }
    async createTask(req, res) {
        const task = this.taskService.createTask(req.body);
        res.json({ task: task });
    }
    async updateTask(req, res) {
        const { id } = req.params;
        const task = this.taskService.updateTask(req.body, id);
        res.json({ task: task });
    }
    async deleteTask(req, res) {
        const { id } = req.params;
        const task = this.taskService.deleteTask(id);
        return task;
    }
}
exports.default = TaskController;
