// api/index.js
const apiFibonacci = require('./fibonacci');
module.exports = function (app) {
    apiFibonacci(app);
};