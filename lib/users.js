import { prisma } from "@/utils/db"

export const createUser = async () => prisma.users.create({
    data: {
        name: "Moshe",
        email: "k@gmail.com",
        password: "123",
    },
})