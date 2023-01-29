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
        Object.defineProperty(this, "app", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (0, express_1.default)()
        });
        Object.defineProperty(this, "initializeServer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (route) => {
                this.app.use(express_1.default.json());
                this.app.use("/", route.route);
                this.app.listen(3002, () => {
                    console.log("Listening on port 3002!");
                });
            }
        });
        this.initializeServer(route);
    }
}
const route = new task_route_1.default();
const server = new App(route);
