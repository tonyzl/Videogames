const {Router} = require("express");

const {

  getVgsHandler,
  getDetailHandler,
  createVgHandler

} = require("../handlers/vgsHandler");

const vgsRouter = Router();

vgsRouter.get("/", getVgsHandler);

vgsRouter.get("/id/:id", getDetailHandler);

vgsRouter.post("/", createVgHandler);

module.exports = vgsRouter;