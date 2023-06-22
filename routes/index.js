const router = require('express').Router();
const api = require('./api');
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);
router.use('/api', api);

router.use((req, res) => {
    res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;