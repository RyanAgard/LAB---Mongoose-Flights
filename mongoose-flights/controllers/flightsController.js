const {Flight,Destinations} = require('../models/flightsModel')



module.exports.index = async (req, res) => {
    // const flights = await Flight.find().sort({ createdAt: 1 })
    try {
        const flightData = await Flight.find()
        res.render('flights/Index', {flight: flightData})
    } catch (err) {
        console.log(err)
        res.send(err.message)
    }
}


module.exports.new = async (req, res) => {
    const newFlight = new Flight();
	// Obtain the default date
	const dt = newFlight.departs;
  // console.log('dt',dt)
  console.log(newFlight)
	// Format the date for the value attribute of the input
	const departsDate = dt.toISOString().slice(0, 16);
	res.render('flights/New', {departsDate});

}
// module.exports.new = (req, res) => {
//   const newFlight = new Flight({
//     airline: req.body.airline,
//     flightNo: req.body.flightNo,
//     departs: req.body.departs,
//     airport: req.body.airport,
//   });

//   // Obtain the default date
//   const dt = newFlight.departs;
//   // Format the date for the value attribute of the input
//   const departsDate = dt.toISOString().slice(0, 16);
//   res.render("flights/New", { departsDate });
// };


// Those anonymous callback functions now have names: "index" and "show"
module.exports.show = async (req, res) => {
    try {
      const flight = await Flight.findById(req.params.id).populate('destinations');
      res.render("flights/Show", { flight });
    } catch (err) {
      console.log(err);
      res.send(err.message);
    }
  };
// Create to add new flights 
module.exports.create = async (req, res) => {
 try {
    await Flight.create(req.body);
}catch (err){
    console.log(err);
    res.send(err.message)
}
res.redirect('/flight')

}


module.exports.createDestination = async (req, res) => {
  // create a Destination by updating the Destinations property in Flight
  await Flight.findByIdAndUpdate(req.params.id, {
      // push the req.body to the Destinations property/field of this Flight document
      $push: {
          destinations: req.body
      }
  })
  res.redirect(`/flight/${req.params.id}`)
}

module.exports.deleteDestination = async (req, res) => {
  // delete a Destination by updating the Destinations property in Flight
  await Flight.findByIdAndUpdate(req.params.id, {
      // pulling out or removing a subdocument  
      $pull: {
          // from the Destinations property/field
          destinations: {
              // with a matching Destination id
              _id: req.params.cid
          }
      }
  })
  res.redirect(`/flight/${req.params.id}`)
}

module.exports.indexDestination = async (req, res) => {
  // target the Destinations property 
  const Flight = await Flight.findById(req.params.id)
  res.send(Flight.Destinations)
}

module.exports.showDestination = async (req, res) => {
  // find the Flight and filter it's Destinations property array
  const Flight = await Flight.findById(req.params.id)
  const [ Destination ] = Flight.destinations.filter(Destination => Destination._id.toString() === req.params.cid) 
  res.render('Destinations/Edit', { FlightId: req.params.id, Destination })
}

module.exports.updateDestination = async (req, res) => {
  // update a Destination by updating an item in the Destinations property in Flight

  // OPTION 1: using only Mongo operators and queries (more confusing)
console.log(req.body) 
  // find the Flight with the matching id, then check that Flight's Destinations for matching Destination id
  await Flight.updateOne({ _id: req.params.id, 'Destinations._id': req.params.cid }, {
      // set/replace the content 
      $set: {
          // of the Destination at index (represented by $) and change its body property   -->    Destinations[1].body = 'value
          'Destinations.$.body': req.body.body // req.body is the form data and req.body.body is the updated value of the Destination
      }
  })

  // OPTION 2: using plain JavaScript together with Mongo queries (less efficient)

  // const Flight = await Flights.findById(req.params.id)
  // const index = Flight.Destinations.findIndex(Destination => Destination._id.toString() === req.params.cid)
  // Flight.Destinations[index].body = req.body.body
  // await Flight.save()

  res.redirect(`/flight/${req.params.id}`)
}