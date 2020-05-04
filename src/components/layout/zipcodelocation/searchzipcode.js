import { readFileSync } from 'fs';

const data = readFileSync(process.argv[2] + '.short.json');

const out = JSON.parse(data);


/*

const data = fs.readFileSync(process.argv[2]);

const json = JSON.parse(data);

const out  = json.map( item => {

  if ( ! item.geometry ) console.log(item);

  else {

    const [lat,lon] = item.geometry.coordinates;

    return { plz:item.fields.plz, lat, lon, name:item.fields.note }

  }

}).filter( i => i )

console.log('/// ---- ///');

console.log(json[0]);

console.log(out[0]);

​

fs.writeFileSync( process.argv[2] + '.short.json', JSON.stringify(out));

*/


const randomLocation = out[42];

let { lat, lon } = randomLocation;

console.log('/// search for location ///', randomLocation.name );


const deg2rad = Math.PI / 180

const radius = 20;

const kmToLatDegrees = 1 / 110.574;

const kmToLonDegrees = 1 / ( 111.320 * Math.cos(lat * deg2rad) );


let latLow = lat -  ( radius * .5 * kmToLatDegrees )

let latHi  = lat +  ( radius * .5 * kmToLatDegrees )

let lonLow = lon -  ( radius * .5 * kmToLonDegrees )

let lonHi  = lon +  ( radius * .5 * kmToLonDegrees )



out.forEach(p => {

  if ( latLow < p.lat && p.lat < latHi && lonLow < p.lon && p.lon < lonHi ){

  }

    const dX = Math.abs( p.lat - lat );

    const dY = Math.abs( p.lon - lon );

    const dS = Math.sqrt( Math.pow(dX,2) + Math.pow(dY,2) ) * 110.574;

    if ( dS < radius )

      console.log(p.name, p.plz, dS);

})