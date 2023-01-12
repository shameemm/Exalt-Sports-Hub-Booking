from django.shortcuts import render
from rest_framework import viewsets
from .serializers import *
from .models import *
from django.contrib.auth.models import User


# Create your views here.
class UserView(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()
    
class PhoneView(viewsets.ModelViewSet):
    serializer_class = PhoneSerializer
    queryset = UserProfile.objects.all()
