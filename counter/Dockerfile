
#we are placing a base for our docker image
FROM ubuntu:latest
#we are labeling our docker image here
LABEL image="frontendstatic"
#we are running few commands in our container(during container creation)
RUN apt update 
RUN apt install ap unzip -y
RUN rm -rf /var/www/html/index.html
#we are copying source code from local storage
COPY counter /var/www/html/counter.html
#we are moving to /var/www/html
WORKDIR /var/www/html
#we are unzipping and extracting the source code in default deployment enviornment locationx
RUN unzip counter.zip
#we are exposing our container to a port
EXPOSE 80
#we are providing container a processs 
CMD ["nginx", "-g" ,"daemon off;"]