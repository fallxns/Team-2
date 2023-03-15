const app = require('express')();
const PORT = 8080;

app.app.listen(PORT, () =>
  console.log(`server running on http://localhost:${PORT}`)
);
