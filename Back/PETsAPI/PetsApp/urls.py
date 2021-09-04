from django.conf.urls import url
from PetsApp import views

urlpatterns = [
    url(r'^pet$', views.petsApi),
    url(r'^pet/([0-9]+)$', views.petsApi)
]