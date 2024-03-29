#!/bin/bash

# Удаление всех контейнеров Docker
containers=$(docker ps -aq)
if [ -n "$containers" ]; then
    echo "Удаляем все Docker контейнеры..."
    docker rm -f $containers
else
    echo "Нет контейнеров для удаления."
fi

# Удаление всех образов Docker
images=$(docker images -aq)
if [ -n "$images" ]; then
    echo "Удаляем все Docker образы..."
    docker rmi -f $images
else
    echo "Нет образов для удаления."
fi

# Удаление всех томов Docker
volumes=$(docker volume ls -q)
if [ -n "$volumes" ]; then
    echo "Удаляем все Docker тома..."
    docker volume rm $volumes
else
    echo "Нет томов для удаления."
fi

# Удаление всех сетей Docker, кроме стандартных
networks=$(docker network ls | grep "bridge\|none\|host" -v | awk '{print $2}')
if [ -n "$networks" ]; then
    echo "Удаляем все пользовательские Docker сети..."
    docker network rm $networks
else
    echo "Нет пользовательских сетей для удаления."
fi

echo "Очистка завершена."
