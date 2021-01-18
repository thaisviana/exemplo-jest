const express = require('express')
const router = express.Router();
const Movie = require('../../models/movies')

// @route    GET /movies
// @desc     LIST movies
// @access   Public
router.get('/', async (req, res, next) => {
    try {
        const skip = 50 * (req.query.page || 0)
        const movie = await Movie.find({}).skip(skip).limit(50)
        res.json(movie)
    } catch (err) {
      console.error(err.message)
      res.status(500).send({ "error": 'Erro!' })
    }
  })

// @route    GET /movies/:id
// @desc     LIST movies/:is
// @access   Public
router.get('/:id', async (req, res, next) => {
  try {
    const id = req.params.id
      const movie = await Movie.findById(id)
      res.json(movie)
  } catch (err) {
    console.error(err.message)
    res.status(500).send({ "error": 'Erro!' })
  }
})

// @route    POST /movies
// @desc     ADD movies
// @access   Public
router.post('/', async (req, res, next) => {
  try {
    let movie = new Movie(req.body)
    await movie.save()
    if (movie.id) {
        res.json(movie);
    }

  } catch (err) {
    console.error(err.message)
    res.status(500).send({ "error": 'Erro!' })
  }
})

module.exports = router;