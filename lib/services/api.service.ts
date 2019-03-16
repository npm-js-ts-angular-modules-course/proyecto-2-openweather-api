import { URL_LOCALHOST, CURRENT } from './../constants/constants';
import axios from 'axios';
class ApiService {
    private APIKEY: string;
    private lang: string;
    private units: string;
    constructor(APIKEY: string, lang: string = 'es', units: string = 'metric') {
        this.APIKEY = APIKEY;
        this.units = units;
        this.lang = lang;
    }

    // https://api.openweathermap.org/data/2.5/weather?q=Barcelona,es&lang=es&units=metric&appid=' + APIKEY;
    // Buscar por nombre 
    buscarPorNombre(nombre: string, codPais: string = '') {
        let parametros = `&appid=${this.APIKEY}`;
        let filtro = '';
        if (codPais === '') {
            filtro = `q=${nombre}`;
        } else {
            filtro = `q=${nombre},${codPais}`;
        }

        // LLamada a la api
        const url = `${URL_LOCALHOST}${CURRENT}${filtro}${parametros}`;

        axios.get(url).then(
            e => console.log(e.data)
        ).catch(
            error => console.log(error)
        );
    }
    // buscar por coordenadas
    // Buscar por codigo zip / codigo postal
}