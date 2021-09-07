from django.db import models

# Create your models here.
class Pet(models.Model):
    Id = models.AutoField(primary_key = True)
    Name = models.CharField(max_length = 255)
    Age = models.IntegerField()
    IsAgeAproximated = models.BooleanField()
    