import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const app = express()
app.use(express.json())

app.get('/', async (req, res) => {
    const tasks = await prisma.task.findMany()
    res.json(tasks)
})

app.post('/', async (req, res) => {
    const { title, description } = req.body
    const task = await prisma.task.create({
        data: {
            title,
            description
        }
    })
    res.json(task)
})

// app.put('/publish/:id', async (req, res) => {
//     const { id } = req.params
//     const post = await prisma.post.update({
//         where: { id },
//         data: { published: true },
//     })
//     res.json(post)
// })

// app.delete('/user/:id', async (req, res) => {
//     const { id } = req.params
//     const user = await prisma.user.delete({
//         where: {
//             id,
//         },
//     })
//     res.json(user)
// })

const server = app.listen(3000,()=>{
    console.log("Listening on port 3000")
})