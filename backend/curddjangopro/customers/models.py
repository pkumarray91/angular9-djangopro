from django.db import models

# Create your models here.
class Customer(models.Model):
    name = models.CharField(max_length=70, blank=False, default='')
    age = models.IntegerField(blank=False, default=1)
    active = models.BooleanField(default=False)

    def __str__(self):
    	return self.name
