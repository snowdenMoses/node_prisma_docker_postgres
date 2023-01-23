import express from "express";
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()
const route = express.Router()
route.get('/', async (req, res) => {
    const tasks = await prisma.task.findMany()
    res.json(tasks)
})

route.post('/', async (req, res) => {
    const { title, description } = req.body
    const task = await prisma.task.create({
        data: {
            title,
            description
        }
    })
    res.json(task)
})

route.patch('/task/:id', async (req, res) => {
    const { id } = req.params
    const task = await prisma.task.update({
        where: { id: parseInt(id) },
        data: { title: req.body.title },
    })
    res.json(task)
})

route.delete('/task/:id', async (req, res) => {
    const { id } = req.params
    const task = await prisma.task.delete({
        where: {
            id: parseInt(id)
        },
    })
    res.json(task)
})

export default route
