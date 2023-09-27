// That this is where our application will go.
const express = require("express");
const morgan = require("morgan");
const mainRouter = require("./routes")
// Import the "mainRouter" module, presumably containing the routing logic for our application, from a file named "routes.js" in the current directory.

const app = express(); // server
// Create an Express application instance named "app", which will be our server.



app.use(morgan("dev"));
app.use(express.json());

app.use(mainRouter)
// Use the "mainRouter" middleware in the Express application.


module.exports = app; 
// Export the Express application instance "app" to make it available for use in other parts of your application or in other modules.

/*Application programmed by :

1. programador5781 https://www.linkedin.com/in/ricardo-ricoz/,
2. Santiago Malagón
3. Leidy Nuñez
*/
