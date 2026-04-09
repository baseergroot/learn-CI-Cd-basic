import express from 'express';
import 'dotenv/config';

const app = express();
const port = +(process.env.PORT ?? 3000)

const appVersion = process.env.APP_VERSION;
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

export default app;

// Only start server if file is run directly (not imported in tests)
if (require.main === module) {
  app.listen(port, '0.0.0.0', () => {
    console.log(`Server running on port ${port} in ${environment} mode`);
  });
}