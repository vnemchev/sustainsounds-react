const express = require('express');
const mongoose = require('mongoose');

const eventController = require('./controllers/eventController');
const authController = require('./controllers/authController');
const userController = require('./controllers/userController');
const cors = require('./middlewares/cors');

async function start() {
    try {
        await mongoose.connect('mongodb://localhost:27017/sustainsounds');

        mongoose.connection.on('open', () => console.log('Db connection established.'));
    } catch (error) {
        console.log('Error connecting to database');
        return process.exit(1);
    }

    const app = express();

    app.get('/', (req, res) => {
        res.send('Hello World!');
    });

    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());
    app.use(cors());

    app.use('/events', eventController);
    app.use('/auth', authController);
    app.use('/user', userController)

    app.listen(3030, () => console.log('REST Service started on port 3030'));
}

start();
