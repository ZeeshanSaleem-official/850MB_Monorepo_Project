const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from the Monorepo Frontend!');
});

app.listen(port, () => {
  console.log(`Frontend server listening on port ${port}`);
});
