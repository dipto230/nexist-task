import express from "express";
import {
  addToCart,
  getCartItems,
  removeCartItem,
} from "./cart.controller";

const router = express.Router();

router.post("/", addToCart);
router.get("/", getCartItems);
router.delete("/:id", removeCartItem);

export const CartRoutes = router;