# Etapa 1: Construcción de la aplicación Angular
FROM node:22-alpine AS build

WORKDIR /app

# Copia los archivos de dependencias e instala
COPY package*.json ./
RUN npm install

# Copia el resto del código fuente
COPY . .

# Compila la aplicación en modo producción
RUN npm run build -- --configuration production

# Etapa 2: Servir la aplicación con Nginx
FROM nginx:alpine


# Copia los archivos compilados al directorio de Nginx
COPY --from=build /app/dist/accdatabase/browser /usr/share/nginx/html

#Copiala configuracion personalizada de nginx
COPY default.conf /etc/nginx/conf.d/default.conf

# Expone el puerto 80
EXPOSE 80

# Inicia Nginx en modo foreground
CMD ["nginx", "-g", "daemon off;"]

