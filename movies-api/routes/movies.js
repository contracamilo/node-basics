const express = require('express');
const { moviesMock } = require('../utils/mocks/movies');


const moviesApi = (app) => {
  const router = express.Router();

  app.use('/api/movies', router);

  router.get('/', async (req, res, next) => {
    try {
      const movies = await Promise.resolve(moviesMock);

      res.status(200).json({
        data: movies,
        message: 'movies listed',
      });
    } catch (error) {
      next(error);
    }
  });

  router.get('/:movieId', async (req, res, next) => {
    try {
      const movie = await Promise.resolve(moviesMock[0]);

      res.status(200).json({
        data: movie,
        message: 'movie retrieved',
      });
    } catch (error) {
      next(error);
    }
  });

  router.post('/', async (req, res, next) => {
    try {
      const createMovieId = await Promise.resolve(moviesMock[0].id);

      res.status(200).json({
        data: createMovieId,
        message: 'movies created',
      });
    } catch (error) {
      next(error);
    }
  });

  router.put('/:movieId', async (req, res, next) => {
    try {
      const updatedMovies = await Promise.resolve(moviesMock[0].id);

      res.status(200).json({
        data: updatedMovies,
        message: 'movie updated',
      });
    } catch (error) {
      next(error);
    }
  });

  router.delete('/:movieId', async (req, res, next) => {
    try {
      const deletedMovies = await Promise.resolve(moviesMock[0].id);

      res.status(200).json({
        data: deletedMovies,
        message: 'the movie was deleted',
      });
    } catch (error) {
      next(error);
    }
  });

  
};

module.exports = moviesApi;