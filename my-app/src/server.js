const express = require('express');
const loggingMiddleware = require('C:\\Users\\GNITC\\Desktop\\New folder\\my-app\\src\\loggingmiddleware');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(loggingMiddleware('backend-api'));

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

app.listen(PORT, () => {
  console.log(`API server running on http://localhost:${PORT}`);
});
