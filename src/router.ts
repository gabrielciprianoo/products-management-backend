import { Router } from "express";
import { createProduct, getProductById, getProducts } from "./handlers/product";
import { handleInputErrors, productParamValidator, productValidators } from "./middleware";

const router = Router();

//Routing
router.get("/api/products", getProducts);

router.post(
  "/api/products",
  productValidators,
  handleInputErrors,
  createProduct
);

router.get(
  "/api/products/:id",
  productParamValidator,
  handleInputErrors,
  getProductById
);

router.patch("/", (req, res) => {
  res.json("Desde PATCH");
});

router.delete("/", (req, res) => {
  res.json("Desde DELETE");
});

export default router;
