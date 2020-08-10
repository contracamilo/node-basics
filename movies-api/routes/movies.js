const express = require('express');
const  MovieService = require('../services/movies');
//const { moviesMock } = require('../utils/mocks/movies');


const moviesApi = (app) => {
  const router = express.Router();

  app.use('/api/movies', router);

    //service instance
    const movieService = new MovieService()


  router.get('/', async (req, res, next) => {
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

  router.get('/:movieId', async (req, res, next) => {
    const { movieId }  = req.params;  

    try {
      const movie = await movieService.getMovies({ movieId });

      res.status(200).json({
        data: movie,
        message: 'movie retrieved',
      });
    } catch (error) {
      next(error);
    }
  });

  router.post('/', async (req, res, next) => {

    const { body: movie }  = req;  

    try {
      const createMovieId = await  movieService.createMovie({ movie });

      res.status(200).json({
        data: createMovieId,
        message: 'movies created',
      });
    } catch (error) {
      next(error);
    }
  });

  router.put('/:movieId', async (req, res, next) => {
    const { movieId }  = req;  
    const { body: movie }  = req;  
    
    try {
      const updatedMovies = await  movieService.updateMovie({ movieId, movie });

      res.status(200).json({
        data: updatedMovies,
        message: 'movie updated',
      });
    } catch (error) {
      next(error);
    }
  });

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