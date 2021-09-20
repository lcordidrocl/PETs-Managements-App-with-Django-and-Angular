from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from PetsApp.models import Pet
from PetsApp.serializers import PetSerializer

import logging

# Manage Pets
class PetsApi(APIView):
    def get(self, request, format = None):
        try:
            pets = Pet.objects.all()
            petSerializer = PetSerializer(pets, many = True)
            return Response(petSerializer.data)
        except Exception as e:
            logging.warning(e)

    def post(self, request, format = None):
        try:
            petSerializer = PetSerializer(data = request.data)
            if petSerializer.is_valid():
                petSerializer.save()
                return Response(petSerializer.data, status = status.HTTP_201_CREATED)
            return Response(petSerializer.errors, status = status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            logging.warning(e)

    def delete(self, request, id, format = None):
        try:
            existingPet = Pet.objects.get(id = id)
            existingPet.delete()
            return Response(status = status.HTTP_204_NO_CONTENT)
        except Pet.DoesNotExist:
            return Response(status = status.HTTP_404_NOT_FOUND)
        except Exception as e:
            logging.warning(e)

    
class PetsByAge(APIView):
    def get(self, request, urlAge, format = None):
        try:
            pets = Pet.objects.filter(age = urlAge)
            petSerializer = PetSerializer(pets, many = True)
            return Response(petSerializer.data)
        except Exception as e:
            logging.warning(e)


class PetsByName(APIView):
    def get(self, request, urlName, format = None):
        try:
            pets = Pet.objects.filter(name = urlName)
            petSerializer = PetSerializer(pets, many = True)
            return Response(petSerializer.data)
        except Exception as e:
            logging.warning(e)
    