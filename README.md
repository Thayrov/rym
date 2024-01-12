# Proyecto Integrador - Rick y Morty (PI-Thayrov)

Este repositorio contiene el código fuente de un proyecto integrador realizado en el bootcamp de Henry, centrado en el universo de Rick y Morty. El proyecto incluye tanto el backend como el frontend para una aplicación que permite a los usuarios interactuar con personajes y otros elementos del universo de Rick y Morty.

## Estructura del Repositorio

La estructura del proyecto se organiza de la siguiente manera:

- **back**: Contiene toda la lógica del backend, incluyendo modelos, controladores, rutas y configuraciones.
- **docs**: Documentación relevante del proyecto, como diagramas de la base de datos.
- **front**: Contiene el código fuente del frontend, incluyendo componentes React, estilos y configuración de Redux.

## Backend (Carpeta `back`)

El backend está construido con [Node.js](https://nodejs.org/) y utiliza [Express](https://expressjs.com/) para manejar las solicitudes HTTP. La persistencia de datos se maneja a través de [PostgreSQL](https://www.postgresql.org/) con [Sequelize](https://sequelize.org/) como ORM.

### Dependencias Principales

- `axios`: Para realizar solicitudes HTTP.
- `dotenv`: Para manejar variables de entorno.
- `express`: Framework de Node.js para construir la API.
- `sequelize`: ORM para PostgreSQL.
- `jest`: Framework de pruebas.

### Comandos para el Backend

- `npm start`: Inicia el servidor en modo producción.
- `npm run dev`: Inicia el servidor en modo desarrollo con nodemon.
- `npm test`: Ejecuta las pruebas.

## Frontend (Carpeta `front`)

El frontend está desarrollado con [React](https://reactjs.org/) y utiliza [Redux](https://redux.js.org/) para la gestión del estado. Además, se utilizan [Styled Components](https://styled-components.com/) para los estilos y [React Router](https://reactrouter.com/) para la navegación.

### Dependencias Principales

- `react`: Biblioteca para construir interfaces de usuario.
- `react-redux`: Integración de Redux con React.
- `styled-components`: Manejo de estilos CSS en componentes React.
- `three`: Biblioteca para gráficos 3D.

### Comandos para el Frontend

- `npm run dev`: Inicia el servidor de desarrollo de Vite.
- `npm run build`: Compila el proyecto para producción.
- `npm run lint`: Ejecuta ESLint para mantener la calidad del código.

## Instalación y Uso

Para instalar y ejecutar este proyecto localmente, sigue estos pasos:

1. Clona el repositorio.
2. Navega a la carpeta `back` y ejecuta `npm install`.
3. Navega a la carpeta `front` y ejecuta `npm install`.
4. Configura las variables de entorno necesarias, las puedes ver en el archivo .env.example.
5. Inicia el backend y el frontend con los comandos proporcionados.

## Contribuciones

Las contribuciones son bienvenidas. Si tienes una sugerencia o corrección, por favor:

1. Haz fork del repositorio.
2. Crea una nueva rama con tus cambios.
3. Envía una pull request.

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo `LICENSE` para más detalles.

## Autores

- Thayrov García

## Agradecimientos

- Agradecimientos especiales al equipo de instructores y compañeros del bootcamp de Henry por su apoyo y colaboración en este proyecto.

## Contacto

Para cualquier consulta o colaboración, no dudes en contactarme:

- Correo electrónico: [contact@thayrov.com]
- LinkedIn: [thayrovg](https://www.linkedin.com/in/thayrovg/)
