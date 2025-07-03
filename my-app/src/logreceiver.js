const express = require('express');

const app = express();
app.use(express.json());

app.post('/logs', (req, res) => {
  const log = req.body;
  console.log('Received Log:', log);
  res.status(200).send('Log received');
});

app.listen(3000, () => {
  console.log('Test log server running on port 3000');
});

