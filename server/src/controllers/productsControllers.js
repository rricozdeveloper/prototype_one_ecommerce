const { Product } = require("../db");


// Get - product/:id
const getProductById = async (id) => {
    try {
        const product = await Product.findByPk(id);
        return product;
    } catch (error) {
        throw new Error(`Error al buscar el producto por ID: ${error.message}`);
    }
};

// Post - create a user o admin
const createProduct = async (name, description, price, stock, image) => await Product.create({ name, description, price, stock, image})




// Patch - update parcial de un producto
const partialUpdateProduct = async (id, updatedFields) => {
    try {
        const [rowsUpdated, [updatedProduct]] = await Product.update(updatedFields, {
            where: { id },
            returning: true, // Esto devuelve el producto actualizado
        });

        if (rowsUpdated === 0) {
            return null; // Si no se actualiza ningún producto, devuelve null
        }

        return updatedProduct;
    } catch (error) {
        throw new Error(error.message);
    }
};


module.exports = {
    getProductById,
    createProduct,
    partialUpdateProduct
}
