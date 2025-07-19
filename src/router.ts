import { Router } from "express";
import {
  createProduct,
  getProductById,
  getProducts,
  updateProduct,
} from "./handlers/product";
import {
  buildProductValidators,
  handleInputErrors,
  productParamValidator,
} from "./middleware";

const router = Router();

//Routing
router.get("/api/products", getProducts);

router.post(
  "/api/products",
  buildProductValidators(["name", "price"]),
  handleInputErrors,
  createProduct
);

router.get(
  "/api/products/:id",
  productParamValidator,
  handleInputErrors,
  getProductById
);

router.put(
  "/api/product/:id",
  buildProductValidators(["name", "price", "availability"]),
  productParamValidator,
  handleInputErrors,
  updateProduct
);

router.patch("/", (req, res) => {
  res.json("Desde PATCH");
});

router.delete("/", (req, res) => {
  res.json("Desde DELETE");
});

export default router;
