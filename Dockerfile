FROM node:20

WORKDIR /app

COPY package*.json ./

COPY . .

RUN npm install

CMD ["npx", "vitepress", "dev", "/app", "--host", "0.0.0.0"]
