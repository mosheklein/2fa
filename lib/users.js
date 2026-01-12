import { prisma } from "@/utils/db"

export const createUser = async (user) => prisma.users.create({
    data:user,
})

export const getUserByEmail = async (email) =>
    prisma.users.findUnique({
        where: { email: email }
    })