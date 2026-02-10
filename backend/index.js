const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('WAI backend is running');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
