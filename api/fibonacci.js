// api/fibonacci.js
module.exports = function (app) {
    const fibonacci_addon = require('../nan_modules/build/Release/get_fibonacci_number_with_bine');
    app.get('/fibonacci/:number', (req, res) => {
        res.send(fibonacci_addon.get_fibonacci_number(req.params.number).toString());
    });
};
