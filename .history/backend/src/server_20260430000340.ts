import express, { Application, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { ProductRoutes } from "./app/modules/product/product.route";

dotenv.config();

const app: Application = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());
app.use("/api/products", ProductRoutes);

// route
app.get("/", (req: Request, res: Response) => {
  res.send("Backend server is running 🚀");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});