import express from "express";
import { createProduct, getProducts } from "./product.controller";

const router = express.Router();

router.post("/", createProduct);
router.get("/", getProducts);

export const ProductRoutes = router;