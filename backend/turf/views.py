from django.shortcuts import render
from rest_framework.views import APIView
from .serializers import TurfDetailsSerializer
from rest_framework.response import Response
from .models import TurfDetails
# Create your views here.

class TurfDetailsView(APIView):
    def post(self, request):
        serializer = TurfDetailsSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    # def get(self,request, format=None):
    #     turf_details = TurfDetails.objects.all()
    #     serializer = TurfDetailsSerializer(turf_details, many=True)
    #     Response(serializer.data)
        
        