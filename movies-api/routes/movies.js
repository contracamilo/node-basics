const express = require('express');
const joi = require('@hapi/joi');
const  MovieService = require('../services/movies');
const validationHandler = require('../utils/middleware/validationHandlers');
const {
  movieIdSchema,
  createMovieSchema,
  updateMovieSchema
} = require('../utils/schemas/movies');
const cacheResponse = require('../utils/cacheResponse');
const {  FIVE_MINUTES_IN_SECS, SIXTY_MINUTES_IN_SECS } = require('.../utils/time');


const moviesApi = (app) => {
  const router = express.Router();

  app.use('/api/movies', router);

    //service instance
    const movieService = new MovieService()


  router.get('/', async (req, res, next) => {
    
    cacheResponse(res, FIVE_MINUTES_IN_SECS);
    const { tags }  = req.query;  

    try {
      const movies = await movieService.getMovies({ tags });

      res.status(200).json({
        data: movies,
        message: 'movies listed',
      });
    } catch (error) {
      next(error);
    }
  });

  router.get(
    '/:movieId',
    validationHandler(joi.object({ movieId: movieIdSchema }), 'params'),
    async (req, res, next) => {

      cacheResponse(res, SIXTY_MINUTES_IN_SECS);

      const { movieId } = req.params;

      try {
        const movie = await movieService.getMovie({ movieId });

        res.status(200).json({
          data: movie,
          message: 'movie retrieved',
        });
      } catch (error) {
        next(error);
      }
    }
  );

  router.post('/', validationHandler(createMovieSchema), async function (req, res, next) {
    const { body: movie } = req;
    try {
      const createdMovieId = await movieService.createMovie({ movie });

      res.status(201).json({
        data: createdMovieId,
        message: 'movie created',
      });
    } catch (err) {
      next(err);
    }
  });

  router.put(
    '/:movieId',
    validationHandler(joi.object({ movieId: movieIdSchema }), 'params'),
    validationHandler(updateMovieSchema),
    async (req, res, next) => {
      const { movieId } = req;
      const { body: movie } = req;

      try {
        const updatedMovies = await movieService.updateMovie({
          movieId,
          movie,
        });

        res.status(200).json({
          data: updatedMovies,
          message: 'movie updated',
        });
      } catch (error) {
        next(error);
      }
    }
  );

  router.delete('/:movieId', async (req, res, next) => {
    const { movieId }  = req;  

    try {
      const deletedMovies = await movieService.deleteMovie({ movieId });

      res.status(200).json({
        data: deletedMovies,
        message: 'the movie was deleted',
      });
    } catch (error) {
      next(error);
    }
  });
  
  router.patch('/:movieId', async (req, res, next) => {
    const { movieId } = req.params;
    const { body: movie } = req;
    
    try {
      const movieModified = await movieService.updateOneFieldMovie({
        movieId,
        movie
      });
      res.status(204).json({
        data: movieModified,
        message: 'movie modified'
      });
    } catch (error) {
      next(error);
    }
  });

  
};

module.exports = moviesApi;