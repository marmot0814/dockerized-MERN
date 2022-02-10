# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /app

# Copies package.json and package-lock.json to Docker environment
COPY package*.json ./

# Installs all node packages
RUN npm install

# Copies everything over to Docker environment
COPY . .

# Uses port which is used by the actual application
ARG PORT
EXPOSE ${PORT}

# Run application
#CMD [ "npm", "start" ]
CMD node index.js
