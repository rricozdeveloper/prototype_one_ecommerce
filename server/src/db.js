// Aquí se configurará la db
const { Sequelize } = require("sequelize");
const fs = require('fs');
const path = require('path');

require("dotenv").config();


const {
    DB_USER, 
    DB_PASSWORD, 
    DB_HOST 
} = process.env;


const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/prototype`, {
  logging: false, // Establece en console.log para lograr ver las consultas SQL sin procesar.
  native: false, // le permite a Sequelize saber que podemos usar pg-native para ~30% más de velocidad
  define: {
    charset: 'utf8',
    collate: 'utf8_general_ci',
  },
});

const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Inyectamos la conexión (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { User, Role, Product, Category } = sequelize.models;



// Aca las relaciones
// Product.hasMany(Reviews);
User.belongsTo(Role, ({through: "user_role" })),// Un usuario pertenece a un rol
Role.belongsToMany(User, ({through: "user_role"})) // Un rol puede tener varios usuarios

// Product.belongsTo(Category, ({through: "product_category"})) // Un producto pertenece a una categoría
// Category.belongsToMany(Product, ({through: "product_category"})) // Una categoría puede tener varios productos

Product.belongsTo(Category); // Un producto pertenece a una categoría
Category.hasMany(Product); // Una categoría puede tener varios productos



module.exports = {
    ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
    conn: sequelize,     // para importar la conexión { conn } = require('./db.js');
  };
  
