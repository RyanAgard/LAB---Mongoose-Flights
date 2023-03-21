const Flights = require('../models/FlightModel')
// const Flights = require('../models/Flights')



module.exports.index = async (req, res) => {
    const flight = await Flights.find();
    res.render('flights/Index', { flight })
}

module.exports.new = async (req, res) => {
    const newFlight = new Flights();
	// Obtain the default date
	const dt = newFlight.departs;
	// Format the date for the value attribute of the input
	const departsDate = dt.toISOString().slice(0, 16);
	res.render('flights/new', {departsDate});
}

// module.exports.delete = async (req, res) => {
//     await Flights.findByIdAndDelete(req.params.id)
//     res.redirect('/flights')
// }

// module.exports.update = async (req, res) => {
//     await Flights.findByIdAndUpdate(req.params.id, req.body)
//     res.redirect(`/flights/${req.params.id}`)
// }

module.exports.create = async (req, res) => {
    console.log(req.body)
    try {
        await Flights.create(req.body)
       res.redirect('/flights')
    } catch(err) {
        res.send(err.message)
    } 
    
}

module.exports.edit = async (req, res) => {
    const flight = await Flights.findById(req.params.id)
    console.log(flight)
    console.log('edit route')
    res.render('flights/Edit', { flight })
}

module.exports.show = async (req, res) => {
    const flight = await Flights.findById(req.params.id)
    console.log(flight)
    res.render('flights/Show', { flight })
}

// module.exports.seed = async (req, res) => {
//     await Flights.deleteMany({})
//     await Flights.create(Flights)
//     res.redirect('/flights')
// }
// EXTRA LOGIC (for comments)

// module.exports.createComment = async (req, res) => {
//     // create a comment by updating the comments property in Flight
//     await Flights.findByIdAndUpdate(req.params.id, {
//         // push the req.body to the comments property/field of this Flight document
//         $push: {
//             comments: req.body
//         }
//     })
//     res.redirect(`/Flights/${req.params.id}`)
// }

// module.exports.deleteComment = async (req, res) => {
//     // delete a comment by updating the comments property in Flight
//     await Flights.findByIdAndUpdate(req.params.id, {
//         // pulling out or removing a subdocument  
//         $pull: {
//             // from the comments property/field
//             comments: {
//                 // with a matching comment id
//                 _id: req.params.cid
//             }
//         }
//     })
//     res.redirect(`/Flights/${req.params.id}`)
// }

// module.exports.indexComment = async (req, res) => {
//     // target the comments property 
//     const Flight = await Flights.findById(req.params.id)
//     res.send(Flight.comments)
// }

// module.exports.showComment = async (req, res) => {
//     // find the Flight and filter it's comments property array
//     const Flight = await Flights.findById(req.params.id)
//     const [ comment ] = Flight.comments.filter(comment => comment._id.toString() === req.params.cid) 
//     res.render('comments/Edit', { FlightId: req.params.id, comment })
// }

// module.exports.updateComment = async (req, res) => {
//     // update a comment by updating an item in the comments property in Flight

//     // OPTION 1: using only Mongo operators and queries (more confusing)
// console.log(req.body) 
//     // find the Flight with the matching id, then check that Flight's comments for matching comment id
//     await Flights.updateOne({ _id: req.params.id, 'comments._id': req.params.cid }, {
//         // set/replace the content 
//         $set: {
//             // of the comment at index (represented by $) and change its body property   -->    comments[1].body = 'value
//             'comments.$.body': req.body.body // req.body is the form data and req.body.body is the updated value of the comment
//         }
//     })

//     // OPTION 2: using plain JavaScript together with Mongo queries (less efficient)

//     // const Flight = await Flights.findById(req.params.id)
//     // const index = Flight.comments.findIndex(comment => comment._id.toString() === req.params.cid)
//     // Flight.comments[index].body = req.body.body
//     // await Flight.save()

//     res.redirect(`/Flights/${req.params.id}`)
// }