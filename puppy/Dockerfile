FROM ubuntu
LABEL tag="puppy"
RUN apt update -y
RUN apt upgrade -y
RUN apt install apache2 -y
RUN apt install nodejs -y
RUN apt install npm -y
RUN rm -rfv index.html /var/www/html/
COPY puppy/ /var/www/html/
WORKDIR /var/www/html/

COPY puppy/ * .

EXPOSE 80

CMD ["apachectl", "-D" ,"FOREGROUND"]