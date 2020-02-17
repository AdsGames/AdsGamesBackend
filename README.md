<h1 align="center">
  A.D.S. Games Backend
</h1>

Future backend for A.D.S. Games website

## 🌍 Env file

```
PG_USER=adsgames
PG_DATABASE=adsgames
PG_PASSWORD=adsgames
PG_HOST=localhost
PG_PORT=5432
```

## 🔧 Quickstart

1. **Build postgres docker container**

```bash
docker build -t adsgames .
```

2. **Run postgres instance**

```bash
docker run --rm -p 5432:5432 adsgames
```

3. **Install dependencies**

```bash
yarn install
```

4. **Run migrations and seed database**

```bash
yarn db-init
```

5. **Start graphql server**

```bash
yarn start-dev
```

6. **Go to playground**

`https://localhost:4000`

## 📝 Scripts

### Codegen type generation

Codegen provides a quick and easy way to generate typescript types from the graphql schema. You will have to have the graphql server running for this to work.

```bash
yarn codegen
```

### Create db migrations

```bash
npx knex migrate:make migration_name -x ts
```

### Run migrations

```bash
npx knex migrate:latest

## OR
yarn migrate
```

### Rollback migrations

```bash
npx knex migrate:rollback

## OR
yarn rollback
```

### Create seed file

```bash
npx knex seed:make seed_name
```

### Run seedfile

```bash
npx knex seed:run` or `yarn seed`

```
