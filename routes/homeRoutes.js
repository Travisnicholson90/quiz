const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        console.log('on home page');
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', async (req, res) => {
    try {
        console.log('on login page');
        
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/signup', async (req, res) => {
    try {
        console.log('on signup page');        
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;