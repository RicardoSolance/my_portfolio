const express = require('express') // importando la módulo NPM express
require("dotenv").config(); //archivo para proteger contraseñas
const cors = require('cors');
const app = express() // Inicializa el servidor. App es un bjeto que representa el server
const port = process.env.PORT || 3000
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.static('public'));
app.use(express.json()); // Para habilitar recepción de datos JSON en una request

app.use("/", (req, res) => {
    console.log("We In");
    res.send("Estamos In")
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})