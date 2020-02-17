# AdsGamesBackend

## Env file

```
PG_USER=adsgames
PG_DATABASE=adsgames
PG_PASSWORD=adsgames
PG_HOST=localhost
PG_PORT=5432
```

## Quickstart

### Postgres docker container

`docker build -t adsgames .`

`docker run --rm -p 5432:5432 adsgames`

### Node

`yarn install`

`yarn db-init`

`yarn start-dev`

## Scripts

### Codegen type generation
Codegen provides a quick and easy way to generate typescript types from the graphql schema. You will have to have the graphql server running for this to work.

`yarn codegen`

### Create db migrations

`npx knex migrate:make migration_name -x ts`

### Run migrations

`npx knex migrate:latest` or `yarn migrate`

### Rollback migrations

`npx knex migrate:rollback` or `yarn rollback`

### Create seed file

`npx knex seed:make seed_name`

### Run seedfile

`npx knex seed:run` or `yarn seed`
