const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

const FOLDER_PATH = './client/public/flyers';

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// An api endpoint that returns a short list of items
app.get('/api/flyers', (req,res) => {
    let files = [];
    fs.readdirSync(FOLDER_PATH).forEach(file => {
        files.push(file)
    });

    res.json(files)
});

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);