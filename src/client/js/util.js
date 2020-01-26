const { handleSubmit3 } = require('./mockAPI2')

const handleSubmit2 = () => {
    return Promise.resolve({ title: "test is working"})
};
exports.handleSubmit2 = handleSubmit2;
