"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const task_controller_1 = __importDefault(require("../controller/task.controller"));
// class TaskRouter {
const route = (0, express_1.Router)();
const taskController = new task_controller_1.default();
//     constructor(){
//         this.initializeRouter()
//     }
//     private initializeRouter(){
route.get('/', taskController.getAllTasks);
route.post('/', taskController.createTask);
route.patch('/task/:id', taskController.updateTask);
route.delete('/task/:id', taskController.deleteTask);
//     }
// }
exports.default = route;
