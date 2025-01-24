const axios = require('axios');

async function makeErrorRequest() {
    try {
        await axios.get('https://nonexistent-url.com');
    } catch (error) {
        return 'Error: Request failed';
    }
}

module.exports = makeErrorRequest;