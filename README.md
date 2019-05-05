"# todo-mern" 

"# docker"

## ---- POSTGRES

docker run \
    --name postgres \
    -e POSTGRES_USER=filipesoares \
    -e POSTGRES_PASSWORD=senhasecreta \
    -e POSTGRES_DB=todo \
    -p 5432:5432 \
    -d \
    postgres

docker ps
docker exec -it postgres /bin/bash

docker run \
    --name adminer \
    -p 8080:8080 \
    --link postgres:postgres \
    -d \
    adminer

## ---- MONGODB

docker run \
    --name mongodb \
    -p 27017:27017 \
    -e MONGO_INITDB_ROOT_USERNAME=admin \
    -e MONGO_INITDB_ROOT_PASSWORD=admin \
    -d \
    mongo:4

docker run \
    --name mongoclient \
    -p 3000:3000 \
    --link mongodb:mongodb \
    -d \
    mongoclient/mongoclient

docker exec -it mongodb \
    mongo --host localhost -u admin -p admin --authenticationDatabase admin \
    --eval "db.getSiblingDB('todo').createUser({user: 'filipesoares', pwd: 'senhasecreta', roles: [{role: 'readWrite', db: 'todo'}]})"