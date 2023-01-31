FROM node:18-alpine

# make the 'app' folder the current working directory
WORKDIR /app

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

# install project dependencies
RUN npm install
COPY ./hacks/docker/start-container /usr/local/bin/start-container
RUN cp -r /app/node_modules /node_modules

EXPOSE 8080
ENTRYPOINT ["start-container"]
