const express = require('express');
const FilmsData = require('../data/films_data.js');
const filmsData = new FilmsData();

const filmsRouter = new express.Router();

//RETRIEVE ALL FILMS
filmsRouter.get('/', function (req, res) {
  const allFilms = filmsData.all();
  res.json({films: allFilms});
});

//RETRIEVE A FILM BY ID
filmsRouter.get('/:id', function (req, res){
  const index = req.params.id;
  const filmById = filmsData.find(index);
  res.json({film: filmById});
});

//CREATE
filmsRouter.post('/', function(req, res){
  const newFilm = req.body.film;
  filmsData.add(newFilm);
  const allFilms = filmsData.all();
  res.json({films: allFilms});
});

//UPDATE
filmsRouter.put('/:id', function(req, res){
  const updatedFilm = req.body.film;
  //request object gives us index which is the id of invidual films
  const index = req.params.id;
  filmsData.update(index, updatedFilm);
  const allFilms = filmsData.all();
  res.json({films: allFilms});
});

//DELETE
filmsRouter.delete('/:id', function(req, res) {
  const index = req.params.id;
  const allFilms = filmsData.all();
  filmsData.delete(index);
  res.json(allFilms);
});


module.exports = filmsRouter;
