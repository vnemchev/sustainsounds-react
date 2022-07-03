const express = require('express');
const mongoose = require('mongoose');
const hbs = require('express-handlebars');

const eventController = require('./controllers/eventController');
const authController = require('./controllers/authController');

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

    app.engine('hbs', hbs.engine({ extname: 'hbs' }));
    app.set('view engine', 'hbs');
    app.set('views', './src/views');
    
    app.use(express.urlencoded({ extended: false }));

    app.use('/events', eventController);
    app.use('/auth', authController);

    app.listen(3030, () => console.log('REST Service started on port 3030'));
}

start();
