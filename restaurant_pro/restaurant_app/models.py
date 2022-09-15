
from email.policy import default
from django.db import models
from django.contrib.auth.models import AbstractUser
from django.http import HttpResponse
# Create your models here.

class AppUser(AbstractUser):
    name = models.CharField(max_length=250, null=False, default='unkown')
    email = models.EmailField(
        verbose_name='email address',
        max_length= 255,
        unique=True,
    )
    
    USERNAME_FIELD= 'email'
    REQUIRED_FIELDS= []
    #line above means both email and password would be required
    
class Cart(models.Model):
    title=models.CharField(max_length=255, null=False)
    special_instructions=models.CharField(max_length=255, default="none")
    quantity=models.IntegerField(default=1)
    price= models.FloatField(default=5.00)
    user= models.ForeignKey('AppUser', on_delete=models.CASCADE)
    
    def __str__(self):
        return f"You are currently ordering {self.quantity} of {self.title} with the following spacial instructions {self.special_instructions}"
    
    

    