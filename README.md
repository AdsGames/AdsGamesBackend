# AdsGamesBackend

## Start Docker

docker build -t adsgames .
docker run --rm -p 5432:5432 adsgames

## Install packages

npm install

## Start node server

npm start-dev

## Create db migrations

npx knex migrate:make migration_name -x ts
npx knex migrate:latest

## Create seed file

npx knex seed:make seed_name
npx knex seed:run

