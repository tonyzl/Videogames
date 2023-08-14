const {createGenreDb, getAllGenres} = require("../controllers/genresControllers");

const createGenreHandler = async (req, res) => {
  const {id, name} = req.body;

  try {
    const newGenre = await createGenreDb(id,name);
    res.status(200).json(newGenre);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};

const getGenresHandler = async (req, res) => {

  try {
      const response = await getAllGenres();
      res.status(200).json(response);
  } catch (error) {
    res.status(400).json({error: error.message});
  }

};

module.exports = {createGenreHandler,getGenresHandler };