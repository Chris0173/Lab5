const express = require('express');
const router = express.Router();

router.get('/square', (req, res) => {
    let number = parseInt(req.query.num);
    let square = number * number;
    res.status(200);
    res.json({ result: square });
});

router.get('/max', (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let max = Math.max(number1, number2);
    res.status(200);
    res.json({ result: max });
});

module.exports = router;
