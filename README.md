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
``````

```yml
# .env

# Ports
LOCAL_PORT=3000
DOCKER_PORT=3306

# Docker compose services mysqldb
MYSQL_DATABASE=mysql_database
MYSQL_USER=mysql_user
MYSQL_PASSWORD=mysql_password
MYSQL_ROOT_PASSWORD=mysql_password

# Docker compose services app
DB_HOST=mysqldb
DB_PORT=3306
```

```
docker compose -d up
```