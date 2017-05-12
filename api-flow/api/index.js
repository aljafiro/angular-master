
/** carga de módulos propios que gestionan cada ruta del api */
const usuarios = require('./usuarios.js');
const sesiones = require('./sesiones.js');
const maestros = require('./maestros.js');
const movimientos = require('./movimientos.js');
const mensajes = require('./mensajes.js');
const eventos = require('./eventos.js');
const items = require('./items.js');

/** Función que configura las rutas de una aplicación */
module.exports = app => {
    usuarios(app, '/api/pub/usuarios');
    sesiones(app, '/api/pub/sesiones');
    maestros(app, '/api/pub/maestros');
    movimientos(app, '/api/priv/movimientos');
    mensajes(app, '/api/priv/mensajes');
    eventos(app, '/api/priv/eventos');
    items(app, '/api/pub/items');
}
