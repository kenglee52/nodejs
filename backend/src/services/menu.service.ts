import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllMenus = async () => {
    return await prisma.menu.findMany({
        include: {
            unit: true
        }
    });
}

export const getMenuById = async (id: number) => {
    return await prisma.menu.findUnique({
        where: { menuID: id }
    })
}

export const createMenu = async (menuName: string, categoryID: number, unitID: number, price: number, qty: number, image: string) => {
    return await prisma.menu.create({
        data: { menuName: menuName, categoryID: categoryID, unitID: unitID, price: price, qty: qty, image: image }
    })
}

export const updateMenu = async (menuName: string, categoryID: number, unitID: number, price: number, qty: number, image: string, id: number) => {
    return await prisma.menu.update({
        data: { menuName: menuName, categoryID: categoryID, unitID: unitID, price: price, qty: qty, image: image },
        where: { menuID: id }
    })
}

export const deleteMenu = async (id: number) => {
    return await prisma.menu.delete({
        where: { menuID: id }
    })
}