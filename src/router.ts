import { Router } from "express";
import { createProduct, getProducts } from "./handlers/product";
import { handleInputErrors, productValidators } from "./middleware";

const router = Router();

//Routing
router.get("/api/products", getProducts);

router.post(
  "/api/products",
  productValidators,
  handleInputErrors,
  createProduct
);

router.put("/", (req, res) => {
  res.json("Desde PUT");
});

router.patch("/", (req, res) => {
  res.json("Desde PATCH");
});

router.delete("/", (req, res) => {
  res.json("Desde DELETE");
});

export default router;
