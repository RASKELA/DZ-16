const axios = require('axios');

async function makeCustomRequest() {
  const config = {
    headers: {
      'X-Custom-Header': 'CustomHeaderValue'
    },
    params: {
      param1: 'value1',
      param2: 'value2'
    }
  };

  try {
    const response = await axios.get('https://example.com', config);
    return response.data;
  } catch (error) {
    return 'Error: Request failed';
  }
}

module.exports = makeCustomRequest;
