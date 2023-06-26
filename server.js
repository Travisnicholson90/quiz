const express = require('express');
const db = require('./config/connection');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
const cwd = process.cwd();

const PORT = process.env.PORT || 10000;
const app = express();

const activity = cwd.includes('render') ? 'production' : 'development';

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(routes);

db.once('open', () => {
    console.log('MongoDB connection established successfully');
    app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT} in ${activity} mode!`);
    }
    );
});

