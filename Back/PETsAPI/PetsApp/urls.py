from django.conf.urls import url
from PetsApp import views

urlpatterns = [
    url(r'^pet/(?P<id>[0-9]+)$', views.PetsApi.as_view()),
    url('pet', views.PetsApi.as_view()),
]