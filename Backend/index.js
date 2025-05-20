import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import UserRouter from "./route/user.js";
import { MongoClient, ServerApiVersion } from 'mongodb';


dotenv.config();

mongoose.connect(process.env.MONGO)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();


app.use(express.json());

const port = 8080;

app.use('/user',UserRouter);

app.listen(port, () => console.log(`Server running on port ${port} `));