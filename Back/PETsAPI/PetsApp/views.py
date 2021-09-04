from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from PetsApp.models import Pet
from PetsApp.serializers import PetSerializer

@csrf_exempt
def petsApi(request, id = 0):

    if request.method == 'GET':
        pets = Pet.objects.all()
        petsSerializer = PetSerializer(pets, many = True)
        return JsonResponse(petsSerializer.data, safe = False)     

    elif request.method == 'POST':
        petData = JSONParser().parse(request)
        petSerializer = PetSerializer(data = petData)
        if petSerializer.is_valid():
            petSerializer.save()
            return JsonResponse("Succesfully added new pet", safe = False)
        else:
            return JsonResponse("Bad Request - Provide a valid Pet", safe = False)
    
    elif request.method == "DELETE":
        existingPet = Pet.objects.get(Id = id)
        existingPet.delete()
        return JsonResponse('Pet deleted', safe = False)
