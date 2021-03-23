FROM node:12.21.0

RUN mkdir /app
WORKDIR /app

COPY . .

# Yükle Ve Kur
RUN npm i
RUN npm run build

## 3000:3000
EXPOSE 3000

## start node express 
CMD npm start
