FROM node
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
CMD node --experimental-modules server.js
#EXPOSE 5000