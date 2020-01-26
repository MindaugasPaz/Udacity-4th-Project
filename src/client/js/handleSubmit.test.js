jest.mock('./mockAPI2')
const { handleSubmit2 } = require('./util.js');

test('Checking API', () => {
    handleSubmit2().then(response => {
        expect(response).toBeDefined();
    })
})