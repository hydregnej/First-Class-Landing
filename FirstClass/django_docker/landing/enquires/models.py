from django.db import models

class Enquires(models.Model):
    f_name = models.CharField(max_length=50, blank=False)             #Имя*
    #s_name = models.CharField(max_length=50, blank=False)             #Фамилия*
    email = models.EmailField(blank=False)                            #Почта*
    phone = models.CharField(max_length=26, blank=False)              #Номер*
    #num_of_travelers = models.CharField(max_length=3, blank=False)    #Число путешественников*
    #continent = models.CharField(max_length=20, blank=False)          #Континент*
    #start_date = models.DateField(blank=False)                        #Дата начала поездки*
    #end_date = models.DateField(blank=False)                          #Дата конца*
    #created = models.DateTimeField(auto_now_add=True)                 #Дата и время создания записи
    #trip_type = models.CharField(max_length=30, blank=False)          #Тип путешествия*
    #text = models.CharField(max_length=255, blank=True)               #Текст пожеланий
    #currency = models.CharField(max_length=5, blank=False)            #Валюта*
    #budge = models.CharField(max_length=20, blank=False)              #Бюджет*
    #confirm_budge = models.BooleanField()                             #Булево соглашение на бюджет*
    #sub_for_contact = models.BooleanField()                           #Булево на связь*
    sub_for_news = models.BooleanField(default=False)                 #Булево на рассылку новостей

    def __str__(self):
        return f'{self.id} {self.f_name}'