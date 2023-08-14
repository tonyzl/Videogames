const {Router} = require("express");
const genresRouter = require("./genresRouter");
const vgsRouter = require("./vgsRouter");

const router = Router();

router.use("/videogames", vgsRouter);

router.use("/genres", genresRouter);

module.exports = router;
