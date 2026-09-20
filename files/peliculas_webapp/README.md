### Blockstellartmovieapp
Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) version 15.0.0.

### Ejecuta el entorno de desarrollo

Ejecuta `ng serve` 
Navega a `http://localhost:4200/`. La aplicación recargara auntomaticamente todos los cambios que se realicen

### Para poder usar la api de peliculas
´´´
https://developer.themoviedb.org/
´´´
1. Necesitas crear una cuenta
2. Ve > ajustes y después selecciona en la barra lateral API (https://www.themoviedb.org/settings/api)
3. Copia y pega tu propia Llave API

##### Conoce más sobre esta api
´´´
https://developer.themoviedb.org/docs/getting-started
´´´

#### Construye la imagen
´´´
docker build -t blockstellartmovieapp .
´´´

#### Ejecuta el contenedor
´´´
docker run --name movieapp -dp 81:80 -e API_MOVIE_DB="https://api.themoviedb.org/3" -e LAMBDA_FUNCTION_URL="https://your-lambda-url" -e KEY_MOVIEDB="1865f43a0549ca50d341dd9ab8b29f49" -e LANGUAGE="es-ES" -e API_FAVORITOS="http://localhost:8080/api/" blockstellartmovieapp
´´´