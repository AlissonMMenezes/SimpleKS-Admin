FROM nginx:stable-alpine
COPY nginx_serverblock.conf /etc/nginx/sites-available/default
COPY dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
