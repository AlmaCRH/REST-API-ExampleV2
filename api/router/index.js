const router = require("express").Router();

const userRouter = require("./user.router"); //Nos traemos el router de user
const movieRouter = require("./movie.router");
const actorRouter = require("./actor.router");

router.use("/users", userRouter); //Le decimos al router principal que use el router de usuario cuando accedamos al endpoint /users
router.use("/movies", movieRouter);
router.use("/actors", actorRouter);

module.exports = router;
