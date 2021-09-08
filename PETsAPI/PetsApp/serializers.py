from rest_framework import serializers
from PetsApp.models import Pet

class PetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pet
        fields = ('id', 'name', 'age', 'isAgeAproximated')