const { Router } = require("express");
const usersRouter = require("./usersRouter");

const mainRouter = Router();

mainRouter.use("/products", (req, res) => {
    res.status(200).send("Aquí irá el router de los productos!")
});

mainRouter.use("/users", usersRouter);



module.exports = mainRouter;

/*Application programmed by :

1. programador5781 https://www.linkedin.com/in/ricardo-ricoz/,
2. Santiago Malagón
3. Leidy Nuñez
*/