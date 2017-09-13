FROM node:alpine

# Create app directory
RUN mkdir -p /app
WORKDIR /app

# Install app dependencies
COPY ./package.json .
COPY ./fastboot-server.js server.js
RUN npm install --production

EXPOSE 3000
CMD ["node", "server.js"]