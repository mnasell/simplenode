const express = require('express');
const app = express();
app.listen(3000, 'mnasell.de', () => console.log('listening on mnasell.de:3000')); 
app.use(express.static('public'));


