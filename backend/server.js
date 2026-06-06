const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Hello from the Monorepo Backend!');
});

app.listen(port, () => {
  console.log(`Backend server listening on port ${port}`);
});
