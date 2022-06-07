const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs');
require('colors');

crearArchivo(argv.base, argv.listar, argv.hasta)
.then(archivo => console.log(archivo.rainbow))
.catch(err => console.log(err));

//console.log(process.argv);
//console.log(argv);

//const [ , , arg3 = 'base=5'] = process.argv;
//const [ , base] = arg3.split('=');
