import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getAllTables = async () => {
    return await prisma.table.findMany();
}