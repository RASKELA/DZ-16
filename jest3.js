const axios = require('axios');
const fetchData = require('./fetchData');

jest.mock('axios');

test('should handle successful request', async () => {
  const mockedResponse = { data: 'successful response' };
  axios.get.mockResolvedValue(mockedResponse);

  const result = await fetchData();

  expect(result).toBe('successful response');
});

test('should handle failed request', async () => {
  axios.get.mockRejectedValue(new Error('Request failed'));

  const result = await fetchData();

  expect(result).toBe('Error: Request failed');
});
