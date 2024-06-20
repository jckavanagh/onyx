FROM node:16-alpine

WORKDIR /app/frontend/

COPY package*.json /app/frontend/
RUN npm install --verbose
# RUN npm ci

COPY . /app/frontend/

CMD ["npm", "start"]