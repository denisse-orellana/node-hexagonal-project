# 🚀 Node JS Project

Node JS project with Typescript and APIs Rest.

## Pre-requisities

To run this project make sure you have installed the following technologies:

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

Install the dependencies

```console
  cd node-hexagonal-project
  yarn install
```

The application will be running in production. To build the project run

```console
  yarn run build
```

Create an ```.env``` file and add the next variables

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

## Running the Dockerfile

Pull the image of MySql DB from DockerHub

```console
  docker pull mysql:8
```

Run the Dockerfile with docker compose

```console
  docker compose up --build -d
```

Check out the running containers from the console or the Docker Desktop

```console
  docker container logs node_project_db
  docker container logs node-project-cont
```

Run the project in the port established in Postman

```console
  http://localhost:3000
```

Find the list of patients in the following direction

```console
  http://localhost:3000/patient/list
```

### * Alternative 

You can also create an image of the project 

```console
  docker build -t node-project:1.0.1 .
```

Uncomment ```image``` instead of ```build``` in the docker compose file

```yml
# docker-compose.yml

  app:
    depends_on:
      - mysqldb
    container_name: node-project-cont
    image: node-project:1.0.1
    # build: .
```

Then run the docker compose command

```console
  docker compose up --build -d
```
