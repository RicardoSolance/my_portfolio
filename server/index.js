require("dotenv").config();
const cors = require('cors');

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use('view engine', 'pug');
app.use(express.static('public'));
app.set('view', './views');
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/', router);

app.listen(port, () => {console.log(`Conexion abierta en puerto  http://localhost:${port}`)});