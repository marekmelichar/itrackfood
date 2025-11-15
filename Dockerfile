ARG NODE_VERSION=24.3.0
FROM node:$NODE_VERSION AS build

WORKDIR /opt/app
COPY package.json package-lock.json ./
RUN npm install

COPY . .

RUN npm run build && \
    mkdir -p ./build && \
    node -p "require('./package.json').version" > ./build/version.txt

FROM nginx:alpine AS final
COPY --from=build /opt/app/build /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
