from .views import GuestAPIList

urlpatterns = [
    path('enquires', GuestAPIList.as_view())
]