const {Router} = require("express");

const {createGenreHandler} = require("../handlers/genresHandler");
const {getGenresHandler} = require("../handlers/genresHandler")

const genresRouter = Router();

genresRouter.post("/", createGenreHandler);
genresRouter.get("/", getGenresHandler);

module.exports = genresRouter;