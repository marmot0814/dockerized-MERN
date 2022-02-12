# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /usr/src/app

# Copies package.json and package-lock.json to Docker environment
COPY package*.json ./

# Installs all node packages
RUN npm install --silent

# Copies everything over to Docker environment
COPY . .

# Installs nodemon for develope
RUN npm install -g nodemon --silent

# Uses port which is used by the actual application
ARG PORT
EXPOSE ${PORT}

# Run application
ARG MODE
CMD npm run ${MODE}
