// dependencies
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
// config
const app = express();
dotenv.config();
const PORT = process.env.PORT || 3500;
// routes
import userRoute from './routes/user.js';
import authRoute from './routes/auth.js';
// middleware
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('connected to database');
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});

app.use('/api/user', userRoute);
app.use('/api/auth', authRoute);
