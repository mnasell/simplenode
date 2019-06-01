var stdio = require('stdio'); 
var ops = stdio.getopt( 
          { 
            'port': {key: 'p', args: 1, mandatory: true, description: 'Port # of the service'}           
           // 'check': {key: 'c', args: 2, description: 'What this option means'}
           //, 'map': {key: 'm', description: 'Another description'}
           //, 'kaka': {args: 1, mandatory: true}
           //, 'ooo': {key: 'o'} 
});

const express = require('express');
const app = express();
app.listen(ops.port, () => console.log('listening on mnasell.de:' + ops.port)); 
app.use(express.static('public'));

