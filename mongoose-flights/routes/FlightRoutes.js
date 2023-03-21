const express = require('express')

const router = express.Router()

const FlightController = require('../controllers/FlightController')

// // I.N.D.U.C.E.S  ->  an acronym that helps remember how to properly order routes
// // Index, New, Delete, Update, Create, Edit, Show

// // Setup an "index" route for pokemonss, attach it to router along with the controller logic
// router.get('/', pokemonsController.index)
console.log(FlightController)
// Setup a "new" route for creating pokemons
router.get('/', FlightController.index)

router.get('/new', FlightController.new)

// router.delete('/clear', FlightController.clear)

// router.delete('/:id', FlightController.delete)

// router.put('/:id', FlightController.update)

// router.post('/seed', FlightController.seed)

router.post('/', FlightController.create)

// router.get('/:id/edit', FlightController.edit)

// router.get('/:id', FlightController.show)


module.exports = router;