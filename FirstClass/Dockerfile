FROM python:3.11

RUN apt update \
    && apt upgrade -y \
    && apt install -y curl \
        locales \
    && rm -rf /var/lib/apt/lists/*
# RU Locale
RUN sed -i -e 's/# ru_RU.UTF-8 UTF-8/ru_RU.UTF-8 UTF-8/' /etc/locale.gen \
    && locale-gen
RUN pip3 install --no-cache-dir --upgrade pip \
    poetry

ENV POETRY_VIRTUALENVS_CREATE=false

WORKDIR /app

COPY pyproject.toml .
COPY poetry.lock .

RUN poetry install --no-dev || poetry install

COPY . /app

# RUN ./scripts/migrations.sh
EXPOSE 8080

CMD ["python", "run.py"]