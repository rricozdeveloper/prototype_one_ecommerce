const { Product } = require("../db");
const {
    createProduct,
    getProductById,
    partialUpdateProduct
} = require("../controllers/productsControllers");

// Get - products 
// Get -products?name=
const getProductsHandler = async (req, res) => {
    const { name } = req.query;
    const allProducts = await Product.findAll();

    try {
        if (name) {
            const byName = await allProducts.filter(i => i.name.toLowerCase().startsWith(name.toLowerCase()))
            byName.length ?
                res.json(byName) :
                res.status(404).send({ message: `No existe un producto con el nombre ${name}` });
        } else {
            res.json(allProducts)
        }
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};


// Get - products/:id
const getProductsByIdHandler = async (req, res) => {
    const { id } = req.params;

    try {
        const product = await getProductById(id);

        if (!product) {
            return res.status(404).send({ message: `No existe un producto con el ID ${id}` });
        }
        res.json(product);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};


// Post para la creación de un producto
const createProductHandler = async (req, res) => {
    const { name, description, price, stock, image } = req.body;
    try {
        // Verificar si ya existe un producto con el mismo nombre
        const existingProduct = await Product.findOne({ where: { name } });

        if (existingProduct) {
            // Respondemos con un código de estado 409 (Conflict) y un mensaje de error
            return res.status(409).send({ error: `Ya existe un producto con este nombre ${name}.` });
        }

        const newProduct = await createProduct(name, description, price, stock, image);
        res.status(201).json(newProduct);

    } catch (error) {
        res.status(400).send({ error: error.message })
    }
};

// // Patch - update parcial de un producto
// const partialUpdateProductHandler = async (req, res) => {
//     const { id } = req.params;
//     const updatedFields = req.body;

//     try {
//         const updatedProduct = await partialUpdateProduct(id, updatedFields);

//         if (!updatedProduct) {
//             return res.status(404).send({ message: `No existe un producto con el ID ${id}` });
//         }

//         res.json(updatedProduct);
//     } catch (error) {
//         res.status(400).send({ error: error.message });
//     }
// };

const partialUpdateProductHandler = async (req, res) => {
    const { id } = req.params;
    const updatedFields = req.body;

    try {
        // Verificar si el producto existe antes de intentar la actualización
        const existingProduct = await Product.findByPk(id);

        if (!existingProduct) {
            return res.status(404).send({ message: `No existe un producto con el ID ${id}` });
        }

        // Verificar si el nombre actualizado ya existe
        const { name } = updatedFields;
        if (name) {
            const productWithSameName = await Product.findOne({ where: { name } });
            if (productWithSameName && productWithSameName.id !== id) {
                return res.status(400).send({ message: `Ya existe un producto con el nombre ${name}` });
            }
        }

        // Realizar la actualización parcial del producto
        const updatedProduct = await partialUpdateProduct(id, updatedFields);

        res.json(updatedProduct);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};


module.exports = {
    getProductsHandler,
    getProductsByIdHandler,
    createProductHandler,
    partialUpdateProductHandler
}