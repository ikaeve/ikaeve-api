.PHONY: up
up:
	docker-compose up

.PHONY: migration
migration:
	yarn prisma migrate dev --name init

.PHONY: init
init:
	cp .env.sample .env
	cp docker-compose.override.yml.sample docker-compose.yml

.PHONY: down
down:
	docker-compose down -v
