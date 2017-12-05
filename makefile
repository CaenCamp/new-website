.PHONY: build help

help:
	@grep -E '^[a-zA-Z0-9_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

install: ## install dependencies with docker
	@docker-compose run --rm gatsby npm install

start: ## run gatsby in develop mode with docker
	@docker-compose up -d

stop: ## stop gatsby in docker
	@docker-compose down

logs: ## Display logs from docker
	@docker-compose logs -f

build: ## build site with docker
	@docker-compose run --rm gatsby npm run build

test: test-unit test-e2e ## launch test unit and e2e

test-unit: ## launch test unit
	@echo " " && echo "** Start tests unit"
	@docker-compose run --rm gatsby npm run test

test-unit-watch: ## launch test unit  in watch mode
	@docker-compose run --rm gatsby npm run test:watch

test-e2e: ## launch test e2e
	@echo " " && echo "** Start tests e2e"
	@make build # > /dev/null 2>&1
	@docker-compose -f docker-compose-test.yml run --rm e2e
	@docker-compose -f docker-compose-test.yml down
