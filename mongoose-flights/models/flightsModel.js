// const mongoose = require('mongoose')


// const Schema = mongoose.Schema 

// const flightsSchema = new Schema({
//     airline: {type: String, enum: ['American', 'Southwest', 'United' ]
//   },

//     flightNo: {type: Number, min: 10, max: 9999},
//     departs: { type: Date, default: new Date(new Date().setFullYear(new Date().getFullYear() + 1)) },
//     airport: {type: String, enum: ['AUS', 'DAL', 'LAX', 'SAN', 'SEA' ]
//   },
//   destinations: [{
//     // an id referencing the Destination 
//     type: mongoose.Types.ObjectId,
//     // search for it in the Destination collection 
//     Ref: 'Destination'
//  }]
   
   
//     // ts: {type: Date, required: true},
// })

// const Flight = mongoose.model('flights', flightsSchema)

// module.exports = Flight;

const mongoose = require('mongoose');

//Schema lets you create blueprints for the structure?
const Schema = mongoose.Schema;

const destinationSchema = new Schema(
  {
    // expecting the "name" property to be a string. validation to make sure the data is legit
    airport: { type: String, required: true, enum: ['AUS', 'DAL','LAX', 'SAN','SEA']}, 
    arrival: { type: Date},
  },
);
// Instantiate a new schema object for fruit and structour our data
const flightSchema = new Schema(
  {
    // expecting the "name" property to be a string. validation to make sure the data is legit
    airline: { type: String, required: true, enum: ['American', 'Southwest','United']}, 
    flightNo: { type: Number, required: 10 <= 9999 },
    departs: { type: Date, default :() => new Date(+new Date() + 365 * 24 * 60 * 60 * 1000) ,required: true },
    airport: { type: String, required: true, enum: ['AUS', 'DAL','LAX', 'SAN','SEA']}, 
    destinations: [destinationSchema],
  },
  { timestamps: true }
  );


// Creating our model using our fruitSchema and give our collection a name of "fruits"
const Flight = mongoose.model('Flight', flightSchema);

const Destinations = mongoose.model('Destination', destinationSchema);

// exporting the Destination model as a module
module.exports = {Flight, Destinations}