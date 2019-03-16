const APIKEY = 'ec32f42ea9357dae4e8e8dbc6d0f77f9';

// Por nombre 
// const url = 'https://api.openweathermap.org/data/2.5/weather?q=Barcelona,es&lang=es&units=metric&appid=' + APIKEY;

// Por coordenadas
// Sidney
// const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-33.8473567&lon=150.6517943&lang=es&units=metric&appid=' + APIKEY;

// Bilbao 
// const url = 'https://api.openweathermap.org/data/2.5/weather?lat=43.2633534&lon=-2.951074&lang=es&units=metric&appid=' + APIKEY;


// Por zip / codigo postal
// Mountain View
// const url = 'https://api.openweathermap.org/data/2.5/weather?zip=94040,us&lang=es&units=metric&appid=' + APIKEY;

// BCN
// const url = 'https://api.openweathermap.org/data/2.5/weather?zip=08001,es&lang=es&units=metric&appid=' + APIKEY

// Baja california - Mexicali
// 
const url = 'https://api.openweathermap.org/data/2.5/weather?zip=21260,mx&lang=es&units=metric&appid=' + APIKEY

import axios from 'axios';

axios.get(url).then(
    e => console.log(e.data)
).catch(
    error => console.log(error)
);