export DOCKER_IMAGE=ember-learning:latest

build:
	docker build . -t ${DOCKER_IMAGE}

start:
	docker-compose -p misc-learning_development up
