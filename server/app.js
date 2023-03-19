const express = require('express');
const app = express();

//PORT
const PORT = process.env.PORT || 3000;
// command - "export PORT=3000"

/*
express methods include:
app.get()
app.post()
app.put()
app.delete()
*/

// Using JSON to read data
app.use(express.json());

app.listen(PORT, () =>
  console.log(`server running on http://localhost:${PORT}`)
);

app.get('/', (req, res) => {
  res.send('hello');
});

app.get('/api/array', (req, res) => {
  res.send([1, 5, 6]);
});
