FROM ubuntu:latest
LABEL Purposre="exm"
RUN apt update 
RUN apt install apache2 unzip -y
RUN rm -rf /var/www/html/index.html
COPY todo /var/www/html/
WORKDIR /var/www/html
RUN mv todo.html
