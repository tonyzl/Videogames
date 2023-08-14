const {Genre} = require("../db");

const createGenreDb = async (id, name) => {
  const genre = await Genre.create({id, name});
  return genre;
};

const getAllGenres = async () => {
  const genresDB = await Genre.findAll();

  return genresDB;
  
};

module.exports = {createGenreDb,getAllGenres};