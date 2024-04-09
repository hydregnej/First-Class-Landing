from django.contrib import admin
from django.urls import path
from guest.views import EnquiresAPIList

urlpatterns = [
    path('admin/', admin.site.urls),
    path('enquires/', EnquiresAPIList.as_view()),
]