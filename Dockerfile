FROM node:20.9.0-alpine3.18
WORKDIR /apps/taiv/frontend
COPY package.json package-lock.json ./
RUN npm i
COPY . .
CMD ["npm", "run", "dev", "--", "--host"]
