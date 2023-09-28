const { Router } = require("express");
const usersRouter = require("./usersRouter");
const productRouter = require("./productRouter");

const mainRouter = Router();

// route para operaciones de usuarios
mainRouter.use("/users", usersRouter);

// route para operaciones de productos
mainRouter.use("/products", productRouter);


module.exports = mainRouter;

/*Application programmed by :

1. programador5781 https://www.linkedin.com/in/ricardo-ricoz/,
2. Santiago Malagón
3. Leidy Nuñez
*/