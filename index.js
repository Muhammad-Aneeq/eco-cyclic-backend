import express from "express";
import { connect } from "./db/connection.js";
import categoryRoute from "./router/categoryRoute.js";
import productRoute from "./router/productRoute.js";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
dotenv.config();

// middleWares
app.use(
  cors({
    allowedHeaders: ["authorization", "Content-Type"], // you can change the headers
    exposedHeaders: ["authorization"], // you can change the headers
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
  })
);
app.use(express.json());

app.use("/api/v1/categories", categoryRoute);
app.use("/api/v1/products", productRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  connect();
  console.log("connected to backend");
});
