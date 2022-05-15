# Pull the Node image from Docker Hub
FROM node:14-slim as build
 
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY . /app
RUN npm ci --loglevel verbose
 
ARG BASE_URL
ENV REACT_APP_API_BASE_URL=${BASE_URL}
 
ARG GOOGLE_CLIENT_ID
ENV REACT_APP_GOOGLE_CLIENT_ID=${GOOGLE_CLIENT_ID}

ARG REACT_APP_GA_TOKEN
ENV REACT_APP_GA_TOKEN=${REACT_APP_GA_TOKEN}

ARG REACT_APP_LOGROCKET_ID
ENV REACT_APP_LOGROCKET_ID={REACT_APP_LOGROCKET_ID}

RUN npm run build
# # stage 2
FROM nginx:1.20.2-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
