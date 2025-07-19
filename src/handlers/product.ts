import { Request, Response } from "express";
import Product from "../models/Product.model";

export const createProduct = async (req: Request, res: Response) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json({ data: product });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.findAll();
    res.json({ data: products });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

export const getProductById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const product = await Product.findByPk(id);

    if (!product) {
      res.status(404).json({ error: "Producto no encontrado" });
      return;
    }
    res.json({ data: product });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const product = await Product.findByPk(id);

    if (!product) {
      res.status(404).json({ error: "Producto no encontrado" });
      return;
    }

    await product.update(req.body);
    await product.save();

    res.json({ data: product });
    
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

export const updateAvailability = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const product = await Product.findByPk(id);

    if (!product) {
      res.status(404).json({ error: "Producto no encontrado" });
      return;
    }

    product.availability =  !product.dataValues.availability;
    await product.save();

    res.json({ data: product });
    
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const product = await Product.findByPk(id);

    if (!product) {
      res.status(404).json({ error: "Producto no encontrado" });
      return;
    }

    await product.destroy();
    product.save();

    res.json({ data: "Producto Eliminado" });
    
  } catch (error) {
    res.status(400).json({ error: error });
  }
};
