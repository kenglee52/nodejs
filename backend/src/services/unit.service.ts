import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const checkUnitName = async (unitName: string) => {
    return await prisma.unit.findFirst({
        where: { unitName: unitName }
    })
}

export const createUnit = async (unitName: string) => {
    return await prisma.unit.create({
        data: { unitName: unitName }
    })
}

export const getAllUnits = async () => {
    return await prisma.unit.findMany();
}

export const getUnitByid = async (id: number) => {
    return await prisma.unit.findUnique({
        where: { unitID: id }
    })
}

export const updateUnit = async (unitName: string, id: number) => {
    return await prisma.unit.update({
        data: { unitName: unitName },
        where: { unitID: id }
    })
}

export const deleteUnit = async(id: number) => {
    return await prisma.unit.delete({
        where: {unitID : id}
    })
}