FROM node:18.20

WORKDIR /app-front

COPY package*.json ./

RUN npm install

EXPOSE 3000

COPY . .

RUN npm run build

CMD  npm run start
