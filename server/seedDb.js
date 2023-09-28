const { Product } = require("./src/db");
const productsData = require("./src/data/products.json");

const checkIfDataExists = async () => {
  try {
    const count = await Product.count(); // Cuenta la cantidad de registros en la tabla Product.
    return count > 0; // Devuelve true si hay registros, false si está vacía.
  } catch (error) {
    console.error("Error al verificar los datos:", error.message);
    return true; // Tratamos un error como si ya hubiera datos para evitar la inserción.
  }
};

const insertProducts = async () => {
  const dataExists = await checkIfDataExists();
  
  if (!dataExists) {
    try {
      await Product.bulkCreate(productsData);
      console.log("Productos insertados con éxito en la base de datos.");
    } catch (error) {
      console.error("Error al insertar productos:", error.message);
    }
  } else {
    console.log("Los datos ya existen en la base de datos, no se insertarán nuevamente.");
  }
};

// Llama a la función para insertar productos al iniciar el servidor.
insertProducts();



/*Application programmed by :

programador5781 
https://www.linkedin.com/in/ricardo-ricoz/

*/