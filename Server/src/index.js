require('dotenv').config();
const express = require('express');
const server = express();
const PUERTO = 3001;
const Router = require('./routes/index'); 
const { conn } = require('./DB_connection');

server.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Credentials', 'true');
   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
   res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
   next();
});

server.use(express.json());

server.use('/rickandmorty', Router);

conn.sync({ force: false })
.then(() => {
   console.log('Database synchronized successfully.');
   server.listen(PUERTO, () => {
     console.log('Server raised on port: ' + PUERTO);
   });
 })
 .catch((error) => {
   console.log(error);
 });
