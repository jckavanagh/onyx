FROM node:16-alpine

WORKDIR /app/frontend/

SHELL ["/bin/bash", "-c"]

COPY package*.json /app/frontend/
# RUN npm install
RUN npm ci

COPY . .

CMD ["npm", "start"]