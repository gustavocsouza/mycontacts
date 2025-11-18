require('express-async-errors');
const express = require('express');
const cors = require('./app/middlewares/cors');
const errorHandler = require('./app/middlewares/errorHandler');

const routes = require('./routes');

const app = express();

const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors);

app.use(routes);

app.use(errorHandler);

app.listen(port, () => console.log('Server started'));
