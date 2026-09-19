#!/bin/sh

# Crear el archivo de configuración JSON
cat <<EOF > /usr/share/nginx/html/assets/config.json
{
  "apiMovieDB": "${API_MOVIE_DB}",
  "keymovieDB": "${KEY_MOVIEDB}",
  "language": "${LANGUAGE}",
  "apiFavoritos": "${API_FAVORITOS}",
  "lambdaFunctionUrl": "${LAMBDA_FUNCTION_URL}"
}
EOF

# Iniciar Nginx
nginx -g 'daemon off;'
