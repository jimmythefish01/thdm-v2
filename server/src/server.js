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

// === Start Server ===
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});