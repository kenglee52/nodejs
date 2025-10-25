import * as CategoryService from "../services/category.service";
import { Request, Response } from "express";

export const create = async (req: Request, res: Response) => {
    const { categoryName } = req.body;
    try {
        if (!categoryName) {
            return res.status(400).json({
                message: "Category can not be null"
            })
        }
        const isExits = await CategoryService.checkExits(categoryName);
        if (isExits) {
            return res.status(401).json({
                message: "Data is exits"
            })
        }
        const result = await CategoryService.createCategory(categoryName);
        if (result) {
            res.status(201).json({
                message: "Create success",
                data: result
            })
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Server error" });
    }
}


export const getAll = async (req: Request, res: Response) => {
    try {
        const data = await CategoryService.getAllCategories();
        if (!data) {
            res.status(400).json({
                message: "Data is not found"
            });
        }
        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Server error" });
    }
}

export const getById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const result = await CategoryService.getCategoryById(Number(id));
        if (!result) {
            return res.status(404).json({
                message: "Data not found"
            })
        }
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Server error" });
    }
}

export const update = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { categoryName } = req.body;
    try {
        if (!categoryName) {
            return res.status(400).json({
                message: "Data cannot be null"
            })
        }
        const result = await CategoryService.updateCategory(categoryName, Number(id))
        res.status(200).json({
            message: "Update success",
            data: result
        })
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Server error" });
    }
}

export const remove = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const result = await CategoryService.deleteCategory(Number(id));
        res.status(200).json({
            message: "Delete success",
            data: result
        })
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Server error" });
    }
}