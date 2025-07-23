import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getProductById,
  getProducts,
  updateAvailability,
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
  "/api/products/:id",
  buildProductValidators(["name", "price", "availability"]),
  productParamValidator,
  handleInputErrors,
  updateProduct
);

router.patch(
  "/api/products/:id",
  productParamValidator,
  handleInputErrors,
  updateAvailability
);

router.delete(
  "/api/products/:id",
  productParamValidator,
  handleInputErrors,
  deleteProduct
);

export default router;
