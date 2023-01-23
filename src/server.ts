import express from 'express'
// import { ITask } from "./interface/task.interface"
import route from "./routes/task.route"


const app = express()
app.use(express.json())
app.use("/",route)

const server = app.listen(3000,()=>{
    console.log("Listening on port 3000")
})