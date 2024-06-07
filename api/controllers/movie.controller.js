const Movie = require("../models/movie.model");
const Actor = require("../models/actor.model");

const getAllMovies = async (request, response) => {
  // Función para traer todos los usuarios de la base de datos
  try {
    const movies = await Movie.findAll(); // Método sequelize para extraer a todos los usuarios
    return response.status(200).json(movies); // Enviamos el status code y el la respuesta en formato json
  } catch (error) {
    return response.status(501).send(error); // En caso de error, mostramos el código de error y enviamos el mensaje.
  }
};

const getMovie = async (request, response) => {
  // Función que traerá un único usuario
  try {
    const movie = await Movie.findOne({
      //Usamos findOne para buscar un usuario usando where para buscar al usuario con los parámetros deseados
      where: {
        id: request.params.id, //Buscamos al usuario por ID
      },
    });
    return response.status(200).json(movie);
  } catch (error) {
    return response.status(501).send(error);
  }
};

const createMovie = async (request, response) => {
  //Creamos una función que utilizaremos para crear a un usuario
  try {
    const movie = await Movie.create(request.body); // Le pasamos por el body la información del usuario al método create de sequelize
    return response.status(200).json(movie);
  } catch (error) {
    return response.status(501).send(error);
  }
};

const updateMovie = async (request, response) => {
  try {
    const movie = await Movie.update(request.body, {
      //Recibe 2 parámetros, la información que actualiza y el usuario que quieres actualizar, lo buscamos por ID
      where: {
        id: request.params.id,
      },
    });
    return response.status(200).json(movie);
  } catch (error) {
    return response.status(501).send(error);
  }
};

const deleteMovie = async (request, response) => {
  try {
    await Movie.destroy({
      where: {
        id: request.params.id, //Le pasamos la id del usuario que queremos borrar
      },
    });
    return response
      .status(200)
      .send(`Movie with id ${request.params.id} was deleted`); //Devolvemos un mensaje avisando de que el usuario con dicha ID fue borrado con éxito
  } catch (error) {
    return response.status(501).send(error);
  }
};

const addActorToMovie = async (request, response) => {
  try {
    const movieId = request.params.id;
    const movie = await Movie.findByPk(movieId);

    if (!movie) {
      return response.status(404).json({ error: "Movie not found" });
    }

    const actor = await Actor.findOne({
      where: {
        id: request.params.actorId,
      },
    });
    await movie.addActor(actor);
    return response.status(200).json(movie);
  } catch (error) {
    return response.status(500).send(error);
  }
};

module.exports = {
  getAllMovies,
  getMovie,
  createMovie,
  updateMovie,
  deleteMovie,
  addActorToMovie,
};
