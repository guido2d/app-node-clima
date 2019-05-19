const lugar = require("./lugar/lugar");
const clima = require("./clima/clima");

const argv = require("yargs").options({
  direccion: {
    alias: "d",
    desc: "Dirección de la ciudad para obtener el clima",
    demand: true
  }
}).argv;

// lugar.getLugarLatLng(argv.direccion)
// .then(console.log);

// clima.getClima(40.419998, -3.700000)
//     .then(console.log)
//     .catch(err => console.log(err));

const getInfo = async direccion => {
  try {
    const ubicacion = await lugar.getLugarLatLng(direccion);
    const temperatura = await clima.getClima(ubicacion.lat, ubicacion.lng);
    return `El clima de ${direccion} es de ${temperatura}ºC`;
  } catch (error) {
    return `No se pudo determinar el clima de ${direccion}`;
  }
};

getInfo(argv.direccion)
  .then(console.log)
  .catch(console.log);
