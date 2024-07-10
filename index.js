import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
const app = express();
dotenv.config();
const PORT = 3000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('connected to database');
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(3000, () => {
  console.log(`server is listening on port ${PORT}`);
});
