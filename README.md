# Docker Compose Nodejs and MySQL example

## Run the System (DEVELOPMENT)

We can easily run the whole with only a single command:

```bash
docker compose -f docker-compose.dev.yml --env-file .env.development up
```

Docker will pull the MySQL and Node.js images (if our machine does not have it before).

The services can be run on the background with command:

```bash
docker compose -f docker-compose.dev.yml --env-file .env.development up -d
```

## Stop the System (DEVELOPMENT)

Stopping all the running containers is also simple with a single command:

```bash
docker compose -f docker-compose.dev.yml down
```

## Run the System (PRODUCTION)

We can easily run the whole with only a single command:

```bash
docker compose -f docker-compose.yml --env-file .env.production up
```

Docker will pull the MySQL and Node.js images (if our machine does not have it before).

The services can be run on the background with command:

```bash
docker compose -f docker-compose.yml --env-file .env.production up -d
```

## Stop the System (PRODUCTION)

Stopping all the running containers is also simple with a single command:

```bash
docker compose -f docker-compose.yml down
```

If you need to stop and remove all containers, networks, and all images used by any service in <em>docker-compose.yml</em> file, use the command:

```bash
docker compose down --rmi all
```
