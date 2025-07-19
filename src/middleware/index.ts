import { Request, Response, NextFunction } from "express";
import { param, validationResult } from "express-validator";
import { check } from "express-validator";

export const handleInputErrors = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
    return;
  }
  next();
};

export const productValidationRules: Record<string, any> = {
  name: check("name")
    .notEmpty()
    .withMessage("El nombre de producto no puede estar vacío")
    .isString()
    .withMessage("El nombre debe ser texto")
    .custom((value) => value.trim().length > 0)
    .withMessage("Nombre no válido"),

  price: check("price")
    .notEmpty()
    .withMessage("El precio no puede estar vacío")
    .isNumeric()
    .withMessage("El precio debe ser numérico")
    .custom((value) => value > 0)
    .withMessage("El precio debe ser mayor a cero"),

  availability: check("availability")
    .isBoolean()
    .withMessage("Valor de disponibilidad incorrecto"),
};

export function buildProductValidators(fields: string[]) {
  return fields.map((field) => {
    const validator = productValidationRules[field];
    if (!validator) {
      throw new Error(`No existe validación para el campo: ${field}`);
    }
    return validator;
  });
}

export const productParamValidator = [
  param("id").isInt().withMessage("ID no valido"),
];
