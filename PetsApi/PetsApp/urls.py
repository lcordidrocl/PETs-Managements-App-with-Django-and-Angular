from django.conf.urls import url
from PetsApp import views

urlpatterns = [
    url(r'^pet/(?P<id>[0-9]+)$', views.PetsApi.as_view()),
    url(r'^pet/age/(?P<urlAge>[0-9]+)$', views.PetsByAge.as_view(), name='getByAge'),
    url(r'^pet/name/(?P<urlName>[a-zA-Z0-9]+)$', views.PetsByName.as_view(), name='getByName'),
    url(r'^pet/name/(?P<urlName>[a-zA-Z0-9]+)/birthdate/(?P<urlBirthdate>[0-9]{4}[0-9]{2}[0-9]{2})$', views.PetsByName.as_view(), name='getByName'),
    url('pet', views.PetsApi.as_view()),
]