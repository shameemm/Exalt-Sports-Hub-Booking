from rest_framework import serializers
from .models import UserData
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from datetime import timedelta, datetime
from django.utils import timezone

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        # Add custom claims
        token['iat'] = datetime.now()
        token['user'] = user.name
        token['email'] = user.email
        token['is_partner'] = user.is_partner
        token['date'] = str(datetime.now())

        return token

class MyAdminTokenObtainPairSerializer(TokenObtainPairSerializer):


    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token['iat'] = datetime.now()
        token['user'] = user.name
        token['email'] = user.email
        token['is_superuser'] = user.is_superuser
        token['date'] = str(datetime.now())

        return token

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = UserData
        fields = ["id", "email", "name", "password","phone","is_partner"]

    def create(self, validated_data):
        user = UserData.objects.create(email=validated_data['email'],
                                       name=validated_data['name'],
                                       phone=validated_data['phone'],
                                       is_partner = validated_data['is_partner'],
                                        )  
        user.set_password(validated_data['password'])
        user.save()
        return user