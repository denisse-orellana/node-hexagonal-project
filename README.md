# 🚀 Node JS Project

Node JS project with Typescript and APIs Rest.

## Pre-requisities

To set up this project make sure you have installed the following technologies:

- Node            v16.14.2
- Npm             v8.16.0
- Typescript      v5.1.3
- Docker          v20.10.24
- Docker Compose  v2.17.2

## Getting started

Clone the repository in the folder 

```console
  git clone git@github.com:denisseee/node-hexagonal-project.git node-hexagonal-project
```

Install dependencies

```console
  cd node-hexagonal-project
  yarn install
```

```console
  yarn run build
  yarn run prod
```

```console
touch .env
```

```yml
# .env

# Ports
LOCAL_PORT=3000
DOCKER_PORT=3306

# Docker compose services mysql
MYSQL_DATABASE=node_mysqlserver
MYSQL_USER=user
MYSQL_PASSWORD=12345
MYSQL_ROOT_PASSWORD=12345

# Docker compose services app
DB_HOST=mysqldb
DB_PORT=3306
```

```console
docker pull mysql:8
```

```console

docker run -d -p 3310:3306 --name node_mysqlserver_container_2 -e MYSQL_ROOT_PASSWORD=12345 -e MYSQL_USER=user -e MYSQL_PASSWORD=12345 -e MYSQL_DATABASE=node_mysqlserver mysql:8



docker compose up --build -d

docker container logs node_project_db

docker container logs node-project-cont

Check endponts in Postman

```