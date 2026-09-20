# 1. Build de la aplicación Angular
FROM node:18 AS build-stage

WORKDIR /app

# Copiar archivos necesarios
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código y construir la aplicación
COPY . .
RUN npm run build --prod

# 2. Servir la aplicación con Nginx
FROM nginx:stable-alpine AS production-stage

# Copiar los archivos de la aplicación Angular a la carpeta de Nginx
COPY --from=build-stage /app/dist/blockstellartmovieapp /usr/share/nginx/html

# Copiar la configuración personalizada de Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copiar el script de inicio
COPY start.sh /usr/local/bin/start.sh
RUN chmod +x /usr/local/bin/start.sh

# Exponer el puerto 80
EXPOSE 80

# Comando por defecto: en lugar de nginx directo, llamamos a start.sh
ENTRYPOINT ["/usr/local/bin/start.sh"]