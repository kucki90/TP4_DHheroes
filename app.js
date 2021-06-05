const express = require('express');
const app = express();
const port = 3030;
const path= require('path');
const views = path.join(__dirname,'views');

app.get('/', (req,res) => res.sendFile(path.join(views, 'index.html')))
app.get('/bella.html',(req,res) => res.sendFile(path.join(views, 'bella.html')))
app.get('/jasmine.html',(req,res) => res.sendFile(path.join(views, 'jasmine.html')))
app.get('/merida.html',(req,res) => res.sendFile(path.join(views, 'merida.html')))
app.get('/mulan.html',(req,res) => res.sendFile(path.join(views, 'mulan.html')))
app.get('/pocahontas.html',(req,res) => res.sendFile(path.join(views, 'pocahontas.html')))
app.get('/tiana.html',(req,res) => res.sendFile(path.join(views, 'tiana.html')))
app.get('/vaiana.html',(req,res) => res.sendFile(path.join(views, 'vaiana.html')))


app.use(express.static('public'))

app.listen(port, () => console.log('Servidor corriendo en el puerto ' + port))