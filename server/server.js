const express = require('express');
const next = require('next');
const path = require('path');

// Determine if the environment is development or production
const dev = process.env.NODE_ENV !== 'production';

// Create a Next.js app instance. 
// We point it to the 'client' directory where your Next.js project lives.
const app = next({ dev, dir: path.join(__dirname, '../client') });

// Get the Next.js request handler
const handle = app.getRequestHandler();

// Use the port defined by Azure App Service, or 3000 for local development
const port = process.env.PORT || 3000;

app.prepare().then(() => {
  // Once Next.js is ready, create the Express server
  const server = express();

  // This is where you could add custom Express API routes if you needed them.
  // For example:
  // server.get('/api/health', (req, res) => {
  //   res.json({ status: 'ok' });
  // });

  // For all other requests, let the Next.js request handler deal with them
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  // Start the Express server
  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
}).catch(err => {
  console.error('Error starting server', err);
  process.exit(1);
});