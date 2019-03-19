const m = require('./dist').ApiService;


const api = new m('<APIKEY>', 'es', 'm');

api.buscarPorNombre('Barcelona', 'es').then(
    data => console.log(data)
);