from rest_framework import generics
from .models import Enquires
from .serializer import GuestSerializer

class EnquiresAPIList(generics.CreateAPIView):
    queryset = Enquires.objects.all()
    serializer_class = GuestSerializer