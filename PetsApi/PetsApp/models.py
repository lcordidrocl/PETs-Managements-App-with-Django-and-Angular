from django.db import models
from PetsApp.services import datetimeService

# Create your models here.
class Pet(models.Model):
    id = models.AutoField(primary_key = True)
    name = models.CharField(max_length = 255)
    birthdate = models.DateField()
    isAgeAproximated = models.BooleanField(default=False)
    age = models.IntegerField(null = True)

    def get_age(self):
        return datetimeService.getAge(self, self.birthdate)
    
    def save(self, *args, **kwargs):
        self.age = self.get_age()
        super(Pet, self).save(*args, **kwargs)

