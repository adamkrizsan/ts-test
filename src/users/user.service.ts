import { db } from "../utils/db.server"

export type User = {
    id : number
    name : string
    email : string
}

export const getUsers = async (id : number): Promise<User | null> => {
     return db.user.findUnique({
        where: {
            id,
        }
    })   
}

export const createUser = async (
        user: Omit<User, "id">
    ): Promise<User> => {
        const { name , email } = user
        return db.user.create({
            data: {
                name,
                email,
            },
            select: {
                id : true,
                name: true,
                email: true,
            },
        })
    }

export const updateUser = async(
    user: Omit<User, "id">,
    id: number
    ): Promise<User> => {
        const { name, email } = user
        return db.user.update({
            where: {
                id,
            },
            data:{
                name, 
                email
            },
            select:{
                id: true,
                name: true,
                email: true,
            }
        })
    }