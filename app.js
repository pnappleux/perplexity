const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ message: 'Hello, world!' });
});

app.get('/visit', async (req, res) => {
  const targetUrl = 'https://google.com'; // Replace with the desired URL
  const requests = Array.from({ length: 100 }, () => axios.get(targetUrl));
  
  try {
    await Promise.all(requests);
    res.json({ message: 'Visited site 100 times in parallel' });
  } catch (error) {
    res.status(500).json({ error: 'Error visiting site', details: error.message });
  }
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
