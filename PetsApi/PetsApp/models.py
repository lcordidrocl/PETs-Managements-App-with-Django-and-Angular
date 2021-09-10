from django.db import models

# Create your models here.
class Pet(models.Model):
    id = models.AutoField(primary_key = True)
    name = models.CharField(max_length = 255)
    birthDate = models.DateField()
    isAgeAproximated = models.BooleanField(default=False)
    