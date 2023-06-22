const express = require('express');
const db = require('./config/connection');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
const cwd = process.cwd();

const PORT = process.env.PORT || 3001;
const app = express();

const activity = cwd.includes('heroku') ? 'production' : 'development';


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
//set us cors to allow us to accept requests from our client on localhost 3000
// app.use(cors({
//     origin: ['http://localhost:3000'],
//     credentials: true,
// }));
app.use(routes);

db.once('open', () => {
    console.log('MongoDB connection established successfully');
    app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT} in ${activity} mode!`);
    }
    );
});

