const Actor = require("../models/actor.model");
const Movie = require("../models/movie.model");

const getActorMoviesLazy = async (request, response) => {
  try {
    const actor = await Actor.findOne({
      where: {
        id: request.params.id,
      },
    });
    const movies = await actor.getMovies();
    return response.status(200).json({ actor, movies });
  } catch (error) {
    response.status(404).send(error);
  }
};

const getActorMoviesEager = async (request, response) => {
  try {
    const actor = await Actor.findOne({
      where: {
        id: request.params.id,
      },
      include: Movie,
    });
    return response.status(200).json(actor);
  } catch (error) {
    response.status(404).send(error);
  }
};

module.exports = {
  getActorMoviesEager,
  getActorMoviesLazy,
};
