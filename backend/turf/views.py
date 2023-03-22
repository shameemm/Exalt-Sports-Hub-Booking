from django.shortcuts import render
from rest_framework.views import APIView
from .serializers import TurfDetailsSerializer
from rest_framework.response import Response
from .models import TurfDetails
# Create your views here.

class AddTurfDetailsView(APIView):
    def post(self, request):
        serializer = TurfDetailsSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    
    
class TurfDetailsView(APIView):
    def get(self, request):
        turfs = TurfDetails.objects.all()
        serializer = TurfDetailsSerializer(turfs, many=True)
        return Response(serializer.data)
    
class TurfRetrieveUpdateDestroyView(APIView):
    def get(self, request, pk):
        if TurfDetails.objects.filter(turf_id=pk).exists():
            turf = TurfDetails.objects.get(turf_id=pk)
            serializer = TurfDetailsSerializer(turf)
            return Response(serializer.data)
        else:
            
            return Response(False)
            
    
    def put(self, request, pk):
        turf = TurfDetails.objects.get(pk=pk)
        serializer = TurfDetailsSerializer(turf, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    
    def delete(self, request, pk):
        turf = TurfDetails.objects.get(pk=pk)
        turf.delete()
        return Response("Turf deleted successfully")
        