FROM node:18

WORKDIR /app-back

COPY package* ./

RUN npm install

EXPOSE 3003

COPY . .

ENTRYPOINT [ "npm", "run" ]

CMD [ "start" ]
