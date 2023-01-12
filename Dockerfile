FROM node:19.4.0


LABEL maintainer="Cole Nelson docker"


WORKDIR /app


COPY . .


EXPOSE 3333


RUN npm install


CMD ["npm", "start"]
