FROM python:3.11.9-bullseye

ENV PIP_DISABLE_PIP_VERSION_CHECK 1
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /backend

COPY ./req.txt /backend/req.txt
COPY . /backend/


RUN pip install -r /backend/req.txt


# sudo docker ps --filter "status=exited" | xargs --no-run-if-empty sudo docker rm
# sudo docker-compose up -d --build
# sudo docker-compose exec web python3 manage.py migrate
# firstclassbackendlanding2024 - admin
# UNY-YgM-9M2-Znd - manager