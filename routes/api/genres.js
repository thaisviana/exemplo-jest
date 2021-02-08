const express = require('express')
const router = express.Router();
const Movie = require('../../models/movies')

// @route    GET /genres
// @desc     LIST genres
// @access   Public
router.get('/', async (req, res, next) => {
    try {
        const genresMovies = await Movie.find({}).select('genres').distinct("genres", function(error, results){});
        res.json(genresMovies)
    } catch (err) {
      console.error(err.message)
      res.status(500).send({ "error": 'Erro!' })
    }
  })


module.exports = router;