const express = require('express');
const router = express.Router();
const movieModel = require('../models/Movie.model');

router.get('/', async (req, res, next) => {
    const movies = await movieModel.find()
    res.render('movies', {movies})
});

router.get('/:title', async (req, res, next) => {
    const { title } = req.params
    const movie = await movieModel.findOne({title})
    res.render('movie', {movie})
});

module.exports = router;
