// Imports
const expect = require('chai').expect;
const ApiService = require('./../dist').ApiService;

// Constantes
const constantes = require('./constants');
const APIURL = constantes.APIURL;
const APIKEY = constantes.APIKEY;

/// Lo correspondiente a los tests
describe('Busqueda del tiempo actual por localizacion geografica', () => {
    beforeEach(() => {
        // Hacemos el mock

        const nock = require('nock');

        const respuesta = require('./mocks/localizacion');

        const query = {
            lat: 35.02,
            lon: 139.01,
            units: 'metric',
            lang: 'es',
            appid: APIKEY
        };

        nock(APIURL)
            .log(console.log)
            .get('/data/2.5/weather')
            .query(query)
            .reply(200, respuesta);
    });

    // Pruebas
    it('Tiempo de coordenadas establecidas de Tawarano (Jápon)', () => {
        const api = new ApiService(APIKEY, 'es', 'metric');

        return api.buscarPorLocalizacionGeografica({lat: 35.02, lon: 139.01}).then(
            respuesta => 
            {
                expect(typeof respuesta.id).to.equal('number');
                expect(typeof respuesta.main.temp).to.equal('number');
                expect(typeof respuesta.main.pressure).to.equal('number');
                expect(typeof respuesta.main.humidity).to.equal('number');
                expect(typeof respuesta.main.temp_min).to.equal('number');
                expect(typeof respuesta.main.temp_max).to.equal('number');

            }
        )
    });
});