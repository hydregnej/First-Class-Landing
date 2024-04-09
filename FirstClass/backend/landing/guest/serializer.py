from rest_framework import serializers
from .models import Enquires

class GuestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Enquires
        fields = "__all__"