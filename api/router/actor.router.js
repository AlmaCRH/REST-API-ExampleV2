const router = require("express").Router();

const {
  getActorMoviesEager,
  getActorMoviesLazy,
} = require("../controllers/actor.controller");

router.get("/:id/movies/eager", getActorMoviesEager);

router.get("/:id/movies/lazy", getActorMoviesLazy);

module.exports = router;
