import express from 'express'
// import { ITask } from "./interface/task.interface"
import TaskRoute from "./routes/task.route";

class App {
    private app = express()
    constructor(route: any) {
        this.initializeServer(route)
    }

    private initializeServer(route: any) {
        this.app.use(express.json())
        this.app.use("/", route)
        this.app.listen(3002, () => {
            console.log("Listening on port 3002!")
        })
    }

}

// const route = new TaskRoute()
// console.log(route)
const server = new App(TaskRoute)
