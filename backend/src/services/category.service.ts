import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const checkExits = async (categoryName: string) => {
    return await prisma.category.findFirst({
        where: { categoryName: categoryName }
    })
}

export const createCategory = async (categoryName: string) => {
    return await prisma.category.create({
        data: { categoryName: categoryName }
    })
}

export const getAllCategories = async () => {
    return await prisma.category.findMany();
}

export const getCategoryById = async (id: number) => {
    return await prisma.category.findUnique({
        where: { categoryID: id }
    })
}

export const updateCategory = async (categoryName: string, id: number) => {
    return await prisma.category.update({
        data: { categoryName: categoryName },
        where: { categoryID: id }
    })
}

export const deleteCategory = async (id: number) => {
    return await prisma.category.delete({
        where: { categoryID: id }
    })
}