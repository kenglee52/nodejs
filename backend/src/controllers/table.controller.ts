import * as TableService from "../services/table.services";
import { Request, Response } from "express";

export const getAll = async (req: Request, res: Response) => {
    try {
        const data = await TableService.getAllTables();
        res.status(200).json(data)
    } catch (error) {
        console.error(error);
        res.status(500).send({
            message: "Server error"
        })
    }
}