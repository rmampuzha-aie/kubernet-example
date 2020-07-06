FROM nginx:1.19.0-alpine
COPY web-ui/ /usr/share/nginx/html
COPY nginx.conf /etc/nginx/
EXPOSE 8888
CMD ["nginx", "-g", "daemon off;"]
