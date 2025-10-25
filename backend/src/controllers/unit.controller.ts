import * as UnitService from "../services/unit.service";
import { Request, Response } from "express";

export const Create = async (req: Request, res: Response) => {
    const { unitName } = req.body;
    try {
        if (!unitName) {
            return res.status(400).json({
                message: "data is null"
            })
        }
        const isExits = await UnitService.checkUnitName(unitName);
        if (isExits) {
            return res.status(402).json({ message: "Data is exits" })
        }
        const result = await UnitService.createUnit(unitName);
        if (result) {
            res.status(201).json({
                message: "Create success",
                data: result
            })
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({
            message: "Server error"
        })
    }
}

export const getAll = async (req: Request, res: Response) => {
    try {
        const data = await UnitService.getAllUnits();
        if (!data) {
            return res.status(400).json({
                message: "Data not found"
            })
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
        const data = await UnitService.getUnitByid(Number(id));
        if (!data) {
            return res.status(400).json({
                message: "Data not found"
            });
        }
        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).send({
            message: "Server error"
        })
    }
}

export const update = async (req: Request, res: Response) => {
    const { unitName } = req.body;
    const { id } = req.params;
    try {
        if (!unitName) {
            return res.status(400).json({
                message: "Data can not be null"
            })
        }
        const result = await UnitService.updateUnit(unitName, Number(id));
        if (!result) {
            return res.status(402).json({
                message: "Update is not success"
            })
        }
        res.status(200).json({
            message: "Update success",
            data: result
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            message: "Server error"
        })
    }
}

export const Remove = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const result = await UnitService.deleteUnit(Number(id));
        if(!result){
            return res.status(400).json({
                message: "Delete faild"
            })
        }
        res.status(200).json({
            message: "Delete success",
            data: result
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            message: "Server error"
        })
    }
}