import express from 'express';

const app = express();
const port = process.env.PORT ?? 3000;

app.get('/', (_req, res) => {
  res.send('<h1> hello it work v1 </h1>');
});

app.listen(port, () => {
  console.log({port})
  console.log(`Server running on http://localhost:${port}`);
});
