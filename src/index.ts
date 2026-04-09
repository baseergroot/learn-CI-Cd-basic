import express from 'express';
import 'dotenv/config';

const app = express();
const port = +(process.env.PORT ?? 3000)

const appVersion = process.env.VERSION || 'v3';
const environment = process.env.NODE_ENV ?? 'development';

app.get('/', (_req, res) => {
  res.send(`<h1>Hello from ${environment} environment - Version ${appVersion}</h1>`);
});

app.get('/health', (_req, res) => {
  res.status(200).json({
    status: 'healthy',
    message: 'App is running fine',
    environment,
    timestamp: new Date(),
    version: appVersion
  });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${port}`);
  console.log(`Public IP should be accessible at ${process.env.PUBLIC_IP || 'localhost'}:${port} `);
});
