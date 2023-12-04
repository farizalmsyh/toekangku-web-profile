FROM node:16.14.0-alpine

# create destination directory
RUN mkdir -p /usr/src/react-app
WORKDIR /usr/src/react-app

# update and install dependency
RUN apk update && apk upgrade
RUN apk add git

# copy the app, note .dockerignore
COPY . /usr/src/react-app/
RUN npm install

# build necessary, even if no static files are needed,
# since it builds the server as well
RUN npm run build

ENV PORT=80
ENV HOST="0.0.0.0"

# expose 5000 on container
EXPOSE $PORT

# start the app
CMD [ "node", "server" ]