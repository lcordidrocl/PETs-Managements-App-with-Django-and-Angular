from rest_framework import serializers
from PetsApp.models import Pet

from PetsApp.services import datetimeService

class PetSerializer(serializers.ModelSerializer):

    age = serializers.SerializerMethodField()

    class Meta:
        model = Pet
        fields = ('id', 'name', 'birthDate', 'isAgeAproximated','age')

    def get_age(self, obj):
        return datetimeService.getAge(self, obj.birthDate)