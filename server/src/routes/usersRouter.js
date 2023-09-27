const { Router } = require("express");


const usersRouter = Router();



// Get- users
usersRouter.get("/", (req, res) => {
    res.status(200).send("Estoy por traer todos los usuarios!")
} );

// Get - users by id
usersRouter.get("/:id", (req, res) =>{
    res.status(200).send("Estoy por traer los datos de un usuario por id!")
} );

// Post - create a user o admin
usersRouter.post("/", (req, res) => {
    res.status(201).send("Estoy por crear un usuario!")
});

// Patch - partial user update.
usersRouter.patch("/:id", (req, res) => {
    res.status(201).send("Estoy por modificar parcialmente un usuario!")
});


// Put - Full update of user data.
usersRouter.put("/:id", (req, res) => {
    res.status(201).send("Estoy por modificar totalmente un usuario!")
});


// DELETE - Delete a user by ID - example: http://localhost:3001/users/8
usersRouter.delete("/:id", (req, res) => {
    res.status(303).send("Estoy por borrar totalmente (borrado lógico) un usuario por id");
});



module.exports = usersRouter;

/*Application programmed by :

1. programador5781 https://www.linkedin.com/in/ricardo-ricoz/,
2. Santiago Malagón
3. Leidy Nuñez
*/