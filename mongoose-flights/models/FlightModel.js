
const mongoose = require('mongoose')

const Schema = mongoose.Schema

// We could define a comments schema like this...

// const commentSchema = new Schema({
//    body: { type: String },
//    user: { type: String, default: 'Bob' }
// })

// and then use it in post schema...

// comments: [commentSchema]

const FlightSchema = new Schema({
    airline: { type: String , enum : ['American', 'Southwest','United']
    },
    flightNo: { type: Number ,  min: [10], max: 9999},
    departs: { type: Date, default: new Date(new Date().setFullYear(new Date().getFullYear() + 1))}
}, { timestamps: true })

const Flight = mongoose.model('flight', FlightSchema)

module.exports = Flight