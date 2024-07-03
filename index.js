import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDb } from './connectdb.js';
import checkListRoute from "./router/checklist.route.js"

const app = express();
app.use(cors());

dotenv.config();
connectDb();

const PORT = process.env.PORT || 5001;

app.get("/", (req, res) => {
    res.send("Simple  server running on expresssssss");
  });

  app.use("/checklist", checkListRoute);
  
  app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
  });








