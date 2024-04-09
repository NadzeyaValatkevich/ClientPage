# Stage 1: Build React App
FROM node:20-alpine3.17 as build
WORKDIR /app

ARG REACT_APP_HOST
ENV REACT_APP_HOST=$REACT_APP_HOST

COPY . .
RUN yarn
RUN yarn build

# Stage 2: Create Nginx Server
FROM nginx:alpine
ENV REACT_APP_HOST=localhost
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
