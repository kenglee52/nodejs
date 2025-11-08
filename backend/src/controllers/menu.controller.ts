import { Request, Response } from "express";
import * as MenuService from "../services/menu.service";

export const getAll = async (req: Request, res: Response) => {
    try {
        const data = await MenuService.getAllMenus();
        if (!data) {
            return res.status(400).json({ message: "Data not found" })
        }
        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).send({
            message: "Server error"
        })
    }
}

export const getById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const data = await MenuService.getMenuById(Number(id));
        if (!data) {
            return res.status(400).json({ message: "Data not found" })
        }
        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).send({
            message: "Server error"
        })
    }
}

export const create = async (req: Request, res: Response) => {
    const { menuName, categoryID, unitID, price, qty, image } = req.body;
    try {
        if (!menuName || !categoryID || !unitID || !price || !qty || !image) {
            return res.status(400).json({
                message: "Please not null value"
            })
        }
        const result = await MenuService.createMenu(menuName, Number(categoryID), Number(unitID), Number(price), Number(qty), image);
        res.status(201).json({
            message: "Create data success",
            data: result
        })
    } catch (error) {
        console.error(error);
        res.status(500).send({
            message: "Server error"
        })
    }
}

export const update = async (req: Request, res: Response) => {
    const { menuName, categoryID, unitID, price, qty, image } = req.body;
    const { id } = req.params;
    try {
        if (!menuName || !categoryID || !unitID || !price || !qty || !image) {
            return res.status(400).json({
                message: "Please not null value"
            })
        }
        const result = await MenuService.updateMenu(menuName, Number(categoryID), Number(unitID), Number(price), Number(qty), image, Number(id));
        res.status(200).json({
            message: "Update data success",
            data: result
        })
    } catch (error) {
        console.error(error);
        res.status(500).send({
            message: "Server error"
        })
    }
}

export const remove = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const result = await MenuService.deleteMenu(Number(id));
        res.status(200).json({
            message: "Delete success",
            data: result
        })
    } catch (error) {
        console.error(error);
        res.status(500).send({
            message: "Server error"
        })
    }
}