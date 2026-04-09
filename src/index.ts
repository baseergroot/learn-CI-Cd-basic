import express from 'express';
import 'dotenv/config';

const app = express();
const port = +(process.env.PORT ?? 3000)

const version = process.env.VERSION || 'v3';

app.get('/', (_req, res) => {
  res.send(`<h1> hello it work ${version} with CI/CD </h1>`);
});

app.get('/health', (_req, res) => {
  res.status(200).json({
    status: 'healthy',
    message: 'App is running fine',
    timestamp: new Date(),
    version
  });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${port}`);
  console.log(`Public IP should be accessible at ${process.env.PUBLIC_IP || 'localhost'}:${port} `);
});
