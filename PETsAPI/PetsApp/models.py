from django.db import models

# Create your models here.
class Pet(models.Model):
    id = models.AutoField(primary_key = True)
    name = models.CharField(max_length = 255)
    age = models.DateField()
    isAgeAproximated = models.BooleanField()
    