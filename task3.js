const axios = require('axios');

async function fetchData() {
  try {
    const response = await axios.get('https://example.com/data');
    return response.data;
  } catch (error) {
    return 'Error: Request failed';
  }
}

module.exports = fetchData;
