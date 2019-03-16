"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./../constants/constants");
const axios_1 = __importDefault(require("axios"));
class ApiService {
    constructor(APIKEY, lang = 'es', units = 'metric') {
        this.APIKEY = APIKEY;
        this.units = units;
        this.lang = lang;
    }
    // https://api.openweathermap.org/data/2.5/weather?q=Barcelona,es&lang=es&units=metric&appid=' + APIKEY;
    // Buscar por nombre 
    buscarPorNombre(nombre, codPais = '') {
        let parametros = `&appid=${this.APIKEY}`;
        let filtro = '';
        if (codPais === '') {
            filtro = `q=${nombre}`;
        }
        else {
            filtro = `q=${nombre},${codPais}`;
        }
        // LLamada a la api
        const url = `${constants_1.URL_LOCALHOST}${constants_1.CURRENT}${filtro}${parametros}`;
        axios_1.default.get(url).then(e => console.log(e.data)).catch(error => console.log(error));
    }
}
