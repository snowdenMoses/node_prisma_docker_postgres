import express from 'express'
// import { ITask } from "./interface/task.interface"
import TaskRoute from "./routes/task.route";
import { IRoute } from "./interface/route"

class App {
    private app = express()
    constructor(route: any) {
        this.initializeServer(route)
    }

    private initializeServer = (route: IRoute) => {
        this.app.use(express.json())
        this.app.use("/", route.route)
        this.app.listen(3002, () => {
            console.log("Listening on port 3002!")
        })
    }

}

const route = new TaskRoute()
const server = new App(route)
