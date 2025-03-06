FROM node:20-alpine AS build

WORKDIR /app/web

# Copy package.json and package-lock.json
COPY ./web/package.json ./web/package-lock.json ./

RUN npm install

# Copy the rest of the frontend app into /app/web
COPY ./web/ ./

RUN npm run build

# Serve with Nginx
FROM nginx:alpine
COPY --from=build /app/web/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
