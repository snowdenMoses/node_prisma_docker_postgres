"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import { ITask } from "./interface/task.interface"
const task_route_1 = __importDefault(require("./routes/task.route"));
class App {
    constructor(route) {
        this.app = (0, express_1.default)();
        this.initializeServer(route);
    }
    initializeServer(route) {
        this.app.use(express_1.default.json());
        this.app.use("/", route);
        this.app.listen(3002, () => {
            console.log("Listening on port 3002!");
        });
    }
}
// const route = new TaskRoute()
// console.log(route)
const server = new App(task_route_1.default);
