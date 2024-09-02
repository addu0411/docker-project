FROM ubuntu
LABEL tag="puppy"
RUN apt update -y
RUN apt upgrade -y
RUN apt install apache2 -y
RUN apt install nodejs -y
RUN apt install npm -y
RUN rm index.html /var/www/html/index.html
RUN mv puppy
WORKDIR /var/www/html/

sudo mv puppy/ * .

EXPOSE 80
CMD ["apachectl", "-D" ,"FOREGROUND"]