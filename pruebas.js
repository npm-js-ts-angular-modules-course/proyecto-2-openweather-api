const m = require('./dist').ApiService;


const api = new m('ec32f42ea9357dae4e8e8dbc6d0f77f9', 'es', 'm');

api.buscarPorNombre('Barcelona', 'es').then(
    data => console.log(data)
);

api.buscarPorLocalizacionGeografica({ lat: -33.8473567, lon: 150.6517943 }).then(
    data => console.log(data)
);

api.buscarPorZipCodigoPostal('21260' , 'mx').then(
    data => console.log(data)
);