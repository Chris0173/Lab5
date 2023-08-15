const express = require('express');
const app1 = express();
const app2 = express();

const http = require('http'); 

const port1 = 3000;
const port2 = 3001;

app1.use('/', express.static('public'));

const myTestRoute = require('./routes/myTestRoute');
const otherRoute = require('./routes/otherRoute');
const calculatorRoute = require('./routes/calculatorRoute');

app1.use('/api', myTestRoute);
app1.use('/api', otherRoute);
app1.use('/api', calculatorRoute); 

const testRoute = require('./routes/myTestRoute');
app1.use('/mytest', testRoute);

app2.use('/', express.static('public'));

const server = http.createServer(app2);

server.listen(port2, () => {
    console.log(`Server 2 listening at http://localhost:${port2}`);
});





