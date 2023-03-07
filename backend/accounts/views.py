from django.shortcuts import redirect
from rest_framework.views import APIView
from .serializers import UserSerializer,MyTokenObtainPairSerializer,MyAdminTokenObtainPairSerializer
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView

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