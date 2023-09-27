# React + Vite 🔽

Este template proporciona una configuración mínima para hacer funcionar React en Vite con HMR (Hot Module Replacement) y algunas reglas de ESLint.

Actualmente, están disponibles dos complementos oficiales:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) utiliza [Babel](https://babeljs.io/) para una Actualización Rápida
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) utiliza [SWC](https://swc.rs/) para una Actualización Rápida

## Prototype App

### Bienvenido al prototype de la App de ecommerce agrícola, tu destino para compras ecológicas y conscientes en Mompox, Bolivar.

"Prototype" es una emocionante iniciativa que busca revolucionar la experiencia de compra en línea al ofrecer una amplia variedad de productos, todos ellos alineados con valores agrícolas, ecológicos y respetuosos con el medio ambiente. Nuestro objetivo es proporcionar a los agricultores una plataforma integral donde puedan ofrecer y comercializar alimentos saludables todo en un solo lugar.

### Tecnologías Utilizadas

#### Frontend

- **React y Vite:** Utilizamos React junto con Vite para crear una interfaz de usuario rápida y eficiente.
- **Redux:** Gestionaremos el estado de la aplicación de manera centralizada y predecible utilizando Redux.
- **Autenticación:** Implementaremos autenticación de usuarios utilizando Firebase para una experiencia de inicio de sesión segura y confiable.
- **Pagos:** Integraremos PayPal y MercadoPago como opciones para procesar pagos de manera segura.

#### Backend

- **Node.js y Express:** Construiremos la estructura del servidor utilizando Node.js y Express para gestionar las solicitudes HTTP.
- **Sequelize:** Utilizaremos Sequelize como ORM (Object-Relational Mapping) para interactuar con la base de datos PostgreSQL de manera eficiente.
- **Base de Datos:** Configuramos una base de datos PostgreSQL llamada "prototype" para almacenar y gestionar los datos del sitio.

## Instrucciones de Instalación

1. Clona este repositorio en tu máquina local utilizando el siguiente comando:

```bash
git clone https://github.com/rricozdeveloper/prototype_one_ecommerce.git
```

2. Navega al directorio del proyecto:

```bash
cd prototype_one_ecommerce
```

3. Instala las dependencias del frontend y del backend:

```bash
cd client
npm install

cd ../server
npm install
```

4. Crea la base de datos PostgreSQL llamada **prototype**

>Puedes nombrarla como desees; solo ten en cuenta que debes agregar ese nombre que has asignado a la variable **DB_DATABASE** en tu archivo .env

5. duplica el archivo **.env.example** el cual se encuentra en el directorio raíz de la carpeta api y renombra el archivo duplicado como .env

```bash
DB_USER=usuariodepostgres
DB_PASSWORD=passwordDePostgres
DB_HOST=localhost
```

Reemplazar `usuariodepostgres` y `passwordDePostgres` con tus propias credenciales para conectarte a postgres. Este archivo va ser ignorado en la subida a github, ya que contiene información sensible (las credenciales).


## Levantar el Proyecto

### Frontend

![Frontend | 25](https://i.postimg.cc/c4B2f2ZG/desarrollo-web-ingenieria-programadores-sitio-web-codificacion-pantallas-interfaz-realidad-aumentada.jpg)

Desde el directorio frontend, ejecuta:

```bash
npm run dev
```

Esto iniciará el servidor de desarrollo de Vite y abrirá la aplicación en tu navegador.

### Backend

![Backend|25](https://i.postimg.cc/vZHYn5JX/ilustracion-concepto-codificar-114360-939.jpg)

Desde el directorio backend, ejecuta:

```bash
npm start
```

Esto iniciará el servidor Node.js utilizando Express.

## Buenas Prácticas

**Modularización:** Recuerda estructurar el proyecto en módulos separados para una mejor organización y mantenibilidad del código.

**Variables de Entorno:** Utiliza variables de entorno para gestionar las configuraciones sensibles y específicas de cada entorno.

**Documentación:** Comenta tu código de manera significativa y documenta las funciones y componentes importantes para que otros desarrolladores puedan entender fácilmente tu trabajo.

**Control de Versiones:** Asegúrate de utilizar control de versiones (Git) y seguir las prácticas de ramificación (GitFlow) para un desarrollo colaborativo más efectivo.

**_¡Gracias por ser parte de este proyecto y contribuir a un mundo más sostenible y consciente!_**

Si tienes alguna pregunta o necesitas ayuda, no dudes en usar los canales de comunicación.  

- Whatsapp
