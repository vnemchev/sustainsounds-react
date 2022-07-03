const express = require('express');
const mongoose = require('mongoose');

async function start() {
    try {
        await mongoose.connect('mongodb://localhost:27017/sustainsounds');

        mongoose.connection.on('open', () => console.log('Db connection established.'));
    } catch (error) {
        console.log('Error connecting to database');
        return process.exit(1);
    }

    const app = express();

    app.listen(3030, () => console.log('REST Service started on port 3030'));
}

start();
