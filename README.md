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

  ** make sure node_modules y tmp/data is empty

  yarn install
```

```console
  yarn run build
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


docker compose up --build -d

docker container logs node_project_db

docker container logs node-project-cont

Check endponts in Postman

```

```
docker build -t node-project:1.0.1 .

# docker-compose.yml
  app:
    depends_on:
      - mysqldb
    container_name: node-project-cont
    image: node-project:1.0.1
    # build: .

docker compose up --build -d


``````