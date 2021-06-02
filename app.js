const express = require('express');
const app = express();
const port = 3030;
const path= require('path');
const views = path.join(__dirname,'views');

app.get('/', (req,res) => res.sendFile(path.join(views, 'index.html')))
app.get('/babbage',(req,res) => res.sendFile(path.join(views, 'babbage.html')))
app.get('/berners-lee',(req,res) => res.sendFile(path.join(views, 'berners-lee.html')))
app.get('/clake',(req,res) => res.sendFile(path.join(views, 'clake.html')))
app.get('/hamilton',(req,res) => res.sendFile(path.join(views, 'hamilton.html')))
app.get('/hopper',(req,res) => res.sendFile(path.join(views, 'hopper.html')))
app.get('/lovelace',(req,res) => res.sendFile(path.join(views, 'lovelace.html')))
app.get('/turing',(req,res) => res.sendFile(path.join(views, 'turing.html')))


app.use(express.static('public'))

app.listen(port, () => console.log('Servidor corriendo en el puerto ' + port))