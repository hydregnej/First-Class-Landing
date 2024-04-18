1. Скачаваем и устанвливаем python: https://www.python.org/ftp/python/3.11.9/python-3.11.9-amd64.exe
   
2. Открываем cmd и переходим в дерикторию как показано на примере -> C:\Users\Иван\Documents\GitHub\First-Class-Landing\FirstClass\django_docker>

3. Ставим виртуальное окружение командой: py -m venv venv

4. Далее переходим по этим путям:
   C:\Users\Иван\Documents\GitHub\First-Class-Landing\FirstClass\django_docker>cd venv
   C:\Users\Иван\Documents\GitHub\First-Class-Landing\FirstClass\django_docker\venv>cd Scripts
   C:\Users\Иван\Documents\GitHub\First-Class-Landing\FirstClass\django_docker\venv\Scripts>activate

5. Должна появиться преписка (venv). для этого пишем source activate (если в gitbash)

6. Далее с помощью двух cd.. возвращаемся до директроии django_docker

7. В этой директории вводим: pip install -r req.txt
   Вот так: (venv) C:\Users\Иван\Documents\GitHub\First-Class-Landing\FirstClass\django_docker>pip install -r req.txt
   Должна начаться установка зависимостей в виртуальное окружение.

8. Далее нужно скачать и установить базу данных Postgresql: https://sbp.enterprisedb.com/getfile.jsp?fileid=1258899

9. В установке убраем галочку pgAdmin 4 и StackBuilder

10. Далее в cmd в директории django_docker вводим: git 
    И ура сервер должен запуститься, можете проверить перейдя по ссылке 0.0.0.0:8000/enquires/
    Должна открыться странца с тем самым POST запросом.

    На фронте когда сделаете форму, запрос отправлять на 0.0.0.0:8000/enquires/