"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const task_service_1 = require("../service/task.service");
class TaskController {
    constructor() {
        Object.defineProperty(this, "taskService", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new task_service_1.TaskService()
        });
        Object.defineProperty(this, "getAllTasks", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: async (req, res) => {
                const tasks = await this.taskService.getAllTasks();
                res.json({ tasks: tasks });
            }
        });
        Object.defineProperty(this, "createTask", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: async (req, res) => {
                const task = await this.taskService.createTask(req.body);
                res.json({ task: task });
            }
        });
        Object.defineProperty(this, "updateTask", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: async (req, res) => {
                const { id } = req.params;
                const task = await this.taskService.updateTask(req.body, id);
                res.json({ task: task });
            }
        });
        Object.defineProperty(this, "deleteTask", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: async (req, res) => {
                const { id } = req.params;
                const task = await this.taskService.deleteTask(id);
                return task;
            }
        });
    }
}
exports.default = TaskController;
