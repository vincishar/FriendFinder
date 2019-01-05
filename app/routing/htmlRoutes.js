const path = require('path');

module.exports = (app) => {

    app.get('/survey', (req, res) => {
        res.sendFile(path.resolve(__dirname + '/../public/survey.html'));
    });

    app.get("/*", (req, res) => { 
        res.sendFile(path.resolve(__dirname + '/../public/home.html'));
    });
}