// server.js
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

app.use(cors());

const PORT = process.env.PORT || 3000;
const BULLHORN_PUBLIC_URL = 'https://public-rest41.bullhornstaffing.com/rest-services/4NF2TD/search/JobOrder';

app.get('/jobs', async (req, res) => {
  try {
    const response = await axios.get(BULLHORN_PUBLIC_URL, {
      params: {
        query: '(isOpen:1)',
        fields: 'id,title,publishedCategory(id,name),address(city,state),employmentType,dateLastPublished,publicDescription',
        count: 20,
        sort: '-dateLastPublished',
        start: 0
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching from Bullhorn:', error);
    res.status(500).json({ error: 'Failed to fetch Bullhorn jobs.' });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running on port ${PORT}`);
});