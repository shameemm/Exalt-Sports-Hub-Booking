from django.shortcuts import redirect
from rest_framework.views import APIView
from .serializers import UserSerializer,MyTokenObtainPairSerializer,MyAdminTokenObtainPairSerializer
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView
from django_otp import devices_for_user
from .permissions import IsSuperUser,IsPartner

from rest_framework.permissions import IsAuthenticated, AllowAny
# from django_otp.plugins.otp_twilio.models import TwilioSMSDevice

# view for registering users
class RegisterView(APIView):
    def post(self, request):
        print("1111")
        serializer = UserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        print("qqqq")
        serializer.save()
        
        return Response(serializer.data)
    
class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer
    
class MyAdminTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyAdminTokenObtainPairSerializer
    
class SendOtp(APIView):
    permission_classes = [IsPartner]
    def post(self,request):
        user = request.user
        return Response(data=user.name)
        
        