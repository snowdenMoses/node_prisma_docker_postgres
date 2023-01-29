"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const task_controller_1 = __importDefault(require("../controller/task.controller"));
class TaskRouter {
    constructor() {
        Object.defineProperty(this, "route", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (0, express_1.Router)()
        });
        Object.defineProperty(this, "taskController", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new task_controller_1.default()
        });
        Object.defineProperty(this, "initializeRouter", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => {
                this.route.get('/', this.taskController.getAllTasks);
                this.route.post('/', this.taskController.createTask);
                this.route.patch('/task/:id', this.taskController.updateTask);
                this.route.delete('/task/:id', this.taskController.deleteTask);
            }
        });
        this.initializeRouter();
    }
}
exports.default = TaskRouter;
