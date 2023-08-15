const express = require('express');
const http = require('http');

const app1 = express();
const port1 = 3000;

app1.use('/', express.static('public'));

const myTestRoute = require('./routes/myTestRoute');
const otherRoute = require('./routes/otherRoute');
const calculatorRoute = require('./routes/calculatorRoute');
const operationsRoute = require('./routes/operationsRoute');

app1.use('/api', myTestRoute);
app1.use('/api', otherRoute);
app1.use('/calculator', calculatorRoute);
app1.use('/operations', operationsRoute);

const server = http.createServer(app1);

server.listen(port1, () => {
    console.log(`Server listening at http://localhost:${port1}`);
});


