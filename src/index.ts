import express from 'express';
import 'dotenv/config';

const app = express();
const port = +(process.env.PORT ?? 3000)

app.get('/', (_req, res) => {
  res.send('<h1> hello it work v2 with CI/CD </h1>');
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${port}`);
  console.log(`Public IP should be accessible at ${process.env.PUBLIC_IP || 'localhost'}:${port} `);
});
