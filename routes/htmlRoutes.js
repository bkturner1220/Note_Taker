const path = require('path');
const index = '../public/index.html';
const notes = '../public/notes.html';

module.exports = (app) => {

    app.get("/", (req, res) => {
        try {
            res.sendFile(path.join(__dirname, index));

        } catch (error) {
            res.status(404);
            res.send(JSON.stringify(error));          
        }
    });
    
    app.get("/notes", (req, res) => {
        try {
            res.sendFile(path.join(__dirname, notes));

        } catch (error) {
            res.status(404);
            res.send(JSON.stringify(error));    
        }
    });
}