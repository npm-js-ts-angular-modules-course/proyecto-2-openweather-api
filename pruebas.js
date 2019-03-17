const m = require('./dist').ApiService;


const api = new m('---', 'es', 'm');


// api.buscarPorNombre('Barcelona', 'es').then(
    // data => console.log(data)
// );

// Por coordenadas
// Sidney
// const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-33.8473567&lon=150.6517943&lang=es&units=metric&appid=' + APIKEY;

// Bilbao 
// const url = 'https://api.openweathermap.org/data/2.5/weather?lat=43.2633534&lon=-2.951074&lang=es&units=metric&appid=' + APIKEY;

// api.buscarPorLocalizacionGeografica(null).then(
 /*   data => console.log(data)
    );
*/
/*api.buscarPorZipCodigoPostal('21260' ,'mx').then(
    data => console.log(data)
);*/

// BCN
// const url = 'https://api.openweathermap.org/data/2.5/weather?zip=08001,es&lang=es&units=metric&appid=' + APIKEY

// Baja california - Mexicali
// 
/*const url = 'https://api.openweathermap.org/data/2.5/weather?zip=21260,mx&lang=es&units=metric&appid=' + APIKEY*/

api.buscarPorNombre('Barcelona', 'es').then(
    data => console.log(data)
);