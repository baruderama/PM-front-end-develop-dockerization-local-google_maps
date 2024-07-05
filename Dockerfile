FROM node:18.16.1

WORKDIR /home/app-front

# Copiar el archivo package.json e instalar las dependencias
COPY package*.json ./
RUN npm install

# Copiar el resto de los archivos del proyecto
COPY . .

# Mover el archivo runtime.js a la carpeta src/
RUN mv node_modules/react-refresh/runtime.js src/runtime.js

# Exponer el puerto
EXPOSE 9014

# Comando para iniciar la aplicación
CMD ["npm", "run", "start"]
