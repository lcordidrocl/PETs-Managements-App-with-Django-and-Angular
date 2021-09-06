from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from PetsApp.models import Pet
from PetsApp.serializers import PetSerializer

# Manage Pets
class PetsApi(APIView):

    def get(self, request, format = None):
        pets = Pet.objects.all()
        petSerializer = PetSerializer(pets, many = True)
        return Response(petSerializer.data)
    
    def post(self, request, format = None):
        petSerializer = PetSerializer(data = request.data)
        if petSerializer.is_valid():
            petSerializer.save()
            return Response(petSerializer.data, status = status.HTTP_201_CREATED)
        return Response(petSerializer.errors, status = status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id, format = None):
        try:
            existingPet = Pet.objects.get(Id = id)
            existingPet.delete()
        except Pet.DoesNotExist:
            return Response(status = status.HTTP_404_NOT_FOUND)

    


