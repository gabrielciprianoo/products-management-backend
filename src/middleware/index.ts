import { Request, Response, NextFunction } from "express";
import { param, validationResult } from "express-validator";
import { check } from 'express-validator';

export const handleInputErrors = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
    let errors = validationResult(req);

    if(!errors.isEmpty()){
         res.status(400).json({ errors : errors.array()})
         return;
    }
    next();
};


export const productValidators = [
  check('name')
    .notEmpty().withMessage('El nombre de producto no puede estar vacio')
    .custom(value => typeof value === 'string' && value.trim().length > 0).withMessage('Nombre de producto no valido'),

  check('price')
    .notEmpty().withMessage('El precio no puede estar vacio')
    .isNumeric().withMessage('Valor no valido')
    .custom(value => value > 0).withMessage('El precio debe ser mayor a cero')
];

export const productParamValidator = [
  param('id').isInt().withMessage('ID no valido')
]
