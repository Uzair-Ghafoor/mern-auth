import express from 'express';
const app = express();

const PORT = 3000;

app.listen(3000, () => {
  console.log(`server is listening on port ${PORT}`);
});
