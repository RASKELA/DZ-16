const axios = require('axios');
const makeCustomRequest = require('./makeCustomRequest');

jest.mock('axios');

test('should include custom headers and params in request', async () => {
    axios.get.mockResolvedValue({ data: 'response data' });

    const result = await makeCustomRequest();

    expect(axios.get).toHaveBeenCalledWith('https://example.com', {
        headers: {
            'X-Custom-Header': 'CustomHeaderValue'
        },
        params: {
            param1: 'value1',
            param2: 'value2'
        }
    });

    expect(result).toBe('response data');
});
