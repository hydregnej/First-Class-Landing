.PHONY: run-server clean install

run-server:
	@echo "Starting server..."
	@python manage.py runserver

install:
	@echo "Installing dep..."
	@poetry shell
	@poetry install
	@sudo apt-get update
	@poetry lock

clean:
	@echo "Removing lock..."
	@rm poetry.lock