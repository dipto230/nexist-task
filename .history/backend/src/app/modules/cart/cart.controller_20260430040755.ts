import { Request, Response } from "express";
import { prisma } from "../../../lib/prisma";


export const addToCart = async (req: Request, res: Response) => {
  try {
    const { productId, name, price, image } = req.body;

    const exists = await prisma.cartItem.findUnique({
      where: { productId },
    });

    if (exists) {
      return res.status(400).json({
        success: false,
        message: "Product already added to cart",
      });
    }

    const result = await prisma.cartItem.create({
      data: {
        productId,
        name,
        price,
        image,
      },
    });

    res.status(201).json({
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to add cart item",
    });
  }
};


export const getCartItems = async (req: Request, res: Response) => {
  const result = await prisma.cartItem.findMany();

  res.json({
    success: true,
    data: result,
  });
};


export const removeCartItem = async (req: Request, res: Response) => {
  const { id } = req.params;

  await prisma.cartItem.delete({
    where: { id as string },
  });

  res.json({
    success: true,
    message: "Item removed",
  });
};