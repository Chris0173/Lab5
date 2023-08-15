const express = require('express');
const router = express.Router();

router.get('/other', (req, res) => {
    res.send('Hello from otherRoute');
});

module.exports = router;
