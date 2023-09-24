import express, { response } from "express"
import type { Request, Response } from "express"


export const userRouter = express.Router();

import * as UserService from "./user.service"
import { error } from "console";




userRouter.get("/:id", async (req : Request, res : Response) => {
    const id: number = parseInt(req.params.id, 10)
    console.log(`Reqest recieved with id: ${id}`)
    try {
        const user = await UserService.getUsers(id)
        if (user) {
            return res.status(200).json(user)
        }
        return res.status(404).json("User not found")
    }catch(error : any) {
        return res.status(500).json(error.message)
    }
})


userRouter.post("/", async (req : Request, res : Response) => {

    console.log(`POST reqest recieved`)

    try { 
        const user = req.body
        const newUser = await UserService.createUser(user)
        return res.status(201).json(newUser)
    } catch (error : any) {
        return res.status(500).json(error.message)
    }
    }    
)

userRouter.put(
    "/:id",
    async (req : Request, res : Response) => {
        const id : number = parseInt(req.params.id, 10)
        try {
            const user = req.body
            const updatedUser = await UserService.updateUser(user, id)
            return res.status(200).json(updatedUser)
        } catch (error : any) {
            return res.status(500).json(error.message)
        }
    }
)

userRouter.get(
    "/",
    async (req: Request, res: Response) => {
        try{
            const users = await UserService.listUsers()
            return res.status(200).json(users)
        } catch (error : any) {
            return res.status(500).json(error.message)
        }
})

userRouter.delete(
    "/:id",
    async (req : Request, res: Response) => {
        const id : number = parseInt(req.params.id, 10)
        try{
            const deleted = await UserService.deleteUser(id)
            return res.status(200).json(deleted)
        } catch (error : any) {
            return res.status(500).json(error.message)
        }
    }
)