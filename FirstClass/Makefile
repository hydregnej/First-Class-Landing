.PHONY: run-server clean install

run-server:
	@echo "Starting server..."
	@python manage.py runserver

install:
	@echo "Installing dep..."
	@sudo apt install poetry
	@poetry shell
	@poetry install
	@poetry update
	@sudo apt-get update
	@poetry lock

clean:
	@echo "Removing lock..."
	@rm poetry.lock