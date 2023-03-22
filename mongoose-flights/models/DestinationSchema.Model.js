const DestinationSchema = new Schema({
    airport: { type: String , enum : ['AUS', 'DAl','LAX','SAN','SEA']
    },
    arrival: { type: Date}
},)

const Destination = mongoose.model('destination', DestinationSchema)

module.exports = Destination