const { Router } = require("express");
const { getProductsHandler, getProductsByIdHandler, createProductHandler, partialUpdateProductHandler } = require("../handlers/productsHandlers")


const productRouter = Router();



// Get- users
productRouter.get("/", getProductsHandler );

// Get - users by id
productRouter.get("/:id", getProductsByIdHandler);

// Post - create a user o admin
productRouter.post("/", createProductHandler);

// Patch - partial user update.
productRouter.patch("/:id", partialUpdateProductHandler);


// Put - Full update of user data.
productRouter.put("/:id", (req, res) => {
    res.status(201).send("Estoy por modificar totalmente un producto!")
});


// DELETE - Delete a user by ID - example: http://localhost:3001/users/8
productRouter.delete("/:id", (req, res) => {
    res.status(303).send("Estoy por borrar totalmente (borrado lógico) un producto por id");
});



module.exports = productRouter;

/*Application programmed by :

1. programador5781 https://www.linkedin.com/in/ricardo-ricoz/,
2. Santiago Malagón
3. Leidy Nuñez
*/