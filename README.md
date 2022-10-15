# Creación de APP

El siguiente repositorio está hecho en base al Challenge Backend - NodeJS brindado por la empresa Alkemy.
Las rutas programadas pueden hacer listado de Personajes y películas.
Se cuenta con Creación, Edición y Eliminación de Personajes (CRUD)
De la misma forma Detalle de Personaje y búsqueda de personajes.
Todas esas llamadas a la API se pueden verificar por medio de Postman.

# Contenido
* [Modelado de Base de Datos](#modelado-de-base-de-datos)
* [Technologies](#technologies)
* [Setup](#setup)


Se puede cuenta con los siguientes requerimientos técnicos:

#  Modelado de base de datos:

El cual contiene:
### Personaje:
Contiene los siguientes campos:
- Nombre.
- Edad.
- Peso.
- Historia.
- Películas o series asociadas.

### Película o Serie:
Contiene los siguientes campos:
- Imagen.
- Título.
- Fecha de creación.
- Calificación (del 1 al 5).
- Personajes asociados.

### Género:
Contiene los siguientes campos:
- Nombre.
- Imagen.
- Películas o series asociadas.

# Technologies
Project is created with:
* Sequelize
* Sengrid
* jwbwebtoken

# Autenticación de Usuarios

Para realizar peticiones a los endpoints subsiguientes el usuario deberá contar con un token que
obtendrá al autenticarse. Para ello, deberán desarrollarse los endpoints de registro y login, que
permitan obtener el token.
### Los endpoints encargados de la autenticación cuentan con las siguientes rutas:
* /auth/login
* /auth/register

Para usar el register se recomienda usar:
```
{
    "name": "Joan",
    "email": "joan.quispec@gmail.com",
    "password": "123456"
}
```

# Setup
To run this project, install it locally using npm:

```
$ cd ../api
$ npm install
$ npm start
```

# Consideraciones finales
Si se quiere obtener un informe de lo obtenido se puede visualizar en el archivo informe-Alkemy.pdf:
De la misma forma, se tiene acceso a postman mediante el siguiente archivo:
```
ALKEMY-DISNEY.postman_collection.json
```