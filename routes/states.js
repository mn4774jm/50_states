let express = require('express')
let States = require('../models').States

let router = express.Router()

// router to get all states, respond with json data in JSON format
router.get('/states', function(req, res, next){
    States.findAll({order: ['name']})
        .then( states => {
            return res.json(states)
        })
        .catch( err => next.err())
})

// Uses :name in the route path to match any patch request to /state/anything
// DB query uses the name parameter
router.patch('/state/:name', function(req, res, next) {
    // update using the req.body.visited value - the Vue.app will send this data with the request
    States.update({ visited: req.body.visited }, { where: {
        name: req.params.name
        }
    })
        .then( rows => {
            if (rows) {
                return res.send('ok')
            } else {
                // if no rows are modified, the state is not in the DB. Return 404.
                return res.status(404).send()
            }
        })
        .catch( err => next.err() ) //if unexpected error, call return next() to pass the request to the error handler
})

module.exports = router