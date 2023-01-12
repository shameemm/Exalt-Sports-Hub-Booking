from rest_framework import serializers
from .models import UserProfile
from django.contrib.auth.models import User
# from django.contrib.auth import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('first_name','last_name','email','username','password')
        
class PhoneSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = '__all__'