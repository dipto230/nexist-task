import { Request, Response } from "express";
import { prisma } from "../../../lib/prisma";

export const createProduct = async (req: Request, res: Response) => {
  try {
    const result = await prisma.product.create({
      data: req.body,
    });

    res.status(201).json({
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Product create failed",
    });
  }
};

export const getProducts = async (req: Request, res: Response) => {
  const result = await prisma.product.findMany();

  res.json({
    success: true,
    data: result,
  });
};