const express = require('express')
const router = express.Router();
const Movie = require('../../models/movies')

// @route    GET /movies
// @desc     LIST movies
// @access   Public
router.get('/', async (req, res, next) => {
    try {
        const movie = await Movie.find({}).limit(50)
        res.json(movie)
    } catch (err) {
      console.error(err.message)
      res.status(500).send({ "error": 'Erro!' })
    }
  })

module.exports = router;