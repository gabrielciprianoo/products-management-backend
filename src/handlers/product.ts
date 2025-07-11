import { NextFunction, Request, Response } from 'express';
import { check, validationResult} from 'express-validator'
import Product from '../models/Product.model';

export const createProduct = async (req: Request, res: Response) => { 

    await check('name')
            .notEmpty().withMessage('El nombre de producto no puede estar vacio')
            .custom( ( value ) => value.trim().length > 0).withMessage('Nombre de producto no valido')
            .run(req);
    
    await check('price')
            .notEmpty().withMessage('El precio no puede estar vacio')
            .isNumeric().withMessage('Valor no valido')
            .custom( ( value ) => value > 0 ).withMessage('Valor No valido')
            .run(req);

    let errors = validationResult(req);

    if(!errors.isEmpty()){
         res.status(400).json({ errors : errors.array()})
         return;
    }
    
    const product = await Product.create(req.body);
    res.json({ data: product });
}