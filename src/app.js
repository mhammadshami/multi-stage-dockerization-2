import express from "express";
import productRoutes from "./routes/products.js";
import mongoose from "mongoose";
import config from "../config.js";
import bodyParser from "body-parser";

const connectToDB = async () => {
  try {
    await mongoose.connect(config.db_uri, {});
    console.log("Mongo db is connected");
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
};

const app = express();

//middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/products", productRoutes);
app.use("/sheme", async (req, res) =>
  res.status(200).json({
    sheme: "sheme2",
  })
);

await connectToDB();

export default app;
