build:
	yarn build . -t ember-learning:latest

start:
	docker run -v $(pwd):/app ember-learning:latest start
