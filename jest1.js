const makeErrorRequest = require('./makeErrorRequest');

test('should return error message on failed request', async () => {
    const result = await makeErrorRequest();
    expect(result).toBe('Error: Request failed');
});