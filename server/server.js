const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// It's good practice to enable CORS
app.use(cors());

// This is where you can add any custom API routes you might need in the future.
// For example:
// app.get('/api/health', (req, res) => {
//   res.json({ status: 'ok' });
// });

// Serve the static files from the Vite-React app's build directory
app.use(express.static(path.join(__dirname, '../client/dist')));

// This catch-all route is crucial for a Single-Page Application (SPA).
// It ensures that any direct navigation to a client-side route (e.g., yourdomain.com/features)
// will serve the main index.html file, allowing the React router to handle the page rendering.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
});

// Start the Express server
app.listen(port, (err) => {
  if (err) throw err;
  console.log(`> Ready on http://localhost:${port}`);
});