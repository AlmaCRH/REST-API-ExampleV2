const router = require("express").Router(); //Importamos el objeto router de express

const {
  getAllMovies,
  getMovie,
  createMovie,
  updateMovie,
  deleteMovie,
  addActorToMovie,
} = require("../controllers/movie.controller"); //Nos importamos los controladores

//Definimos las diferentes rutas, con sus parámetros y controladores respectivamente y específicando su método HTTP
router.get("/", getAllMovies);
router.get("/:id", getMovie);

router.post("/", createMovie);
router.put("/:id", updateMovie);
router.delete("/:id", deleteMovie);

router.put("/:id/actor/:actorId", addActorToMovie);

module.exports = router;
