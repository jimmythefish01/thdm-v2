const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// === Middleware ===
// Enable CORS for all routes
app.use(cors());
// Enable Express to parse JSON in the request body
app.use(express.json());

// === Routes ===
// A simple test route to make sure the server is working
app.get('/api/test', (req, res) => {
  res.json({ message: "Hello from the backend! 👋" });
});

// --- Add this block for production ---
const path = require('path');

// Serve static files from the React build folder
app.use(express.static(path.join(__dirname, '../../client/dist')));

// The "catchall" handler: for any request that doesn't match one above,
// send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
});

// === Start Server ===
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});