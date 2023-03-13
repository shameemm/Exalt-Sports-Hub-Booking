from django.db import models
from accounts.models import UserData

# Create your models here.
def upload_to(instance, filename):
    return 'images/turf-logo/{filename}'.format(filename=filename)

class TurfDetails(models.Model):
    turf = models.OneToOneField(UserData, on_delete=models.CASCADE, null=True)
    place = models.CharField(max_length = 150, null=True)
    map_link = models.CharField(max_length = 200, null=True)
    fives = models.BooleanField(default=False, null=True)
    sevens = models.BooleanField(default=False, null=True)
    elevens = models.BooleanField(default=False, null=True)
    cricket = models.BooleanField(default=False, null=True)
    cafe = models.BooleanField(default=False, null=True)
    rest_room = models.BooleanField(default=False, null=True)
    locker = models.BooleanField(default=False, null=True)
    parking = models.BooleanField(default=False, null=True)
    shower = models.BooleanField(default=False, null=True)
    image = models.ImageField(upload_to=upload_to, null=True, blank=True)
    
    def __str__(self):
        return self.turf.name
    
    