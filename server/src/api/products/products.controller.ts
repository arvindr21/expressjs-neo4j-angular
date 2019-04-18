import { Request, Response, NextFunction } from 'express';
import { Product } from './products.models';

let Products: Product[] = [];

export let controller = {
    get: (req: Request, res: Response, next: NextFunction) => {
        res.json(Products);
    },
    getById: (req: Request, res: Response, next: NextFunction) => {
        res.json({ok: true});
    },
    post: (req: Request, res: Response, next: NextFunction) => {
        res.json({ok: true});
    },
    put: (req: Request, res: Response, next: NextFunction) => {
        res.json({ok: true});
    },
    delete: (req: Request, res: Response, next: NextFunction) => {
        res.json({ok: true});
    },
};