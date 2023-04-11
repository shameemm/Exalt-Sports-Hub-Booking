from django.shortcuts import render
from rest_framework.views import APIView
from .serializers import TurfDetailsSerializer,TurfUpdateSerializer,TurfPricingSerializer
from rest_framework.response import Response
from rest_framework import status
from accounts.permissions import IsPartner,IsSuperUser
from .models import TurfDetails
# Create your views here.

class AddTurfDetailsView(APIView):
    permission_classes = [IsPartner]
    def post(self, request):
        print(request.data)
        serializer = TurfUpdateSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    
    
class TurfDetailsView(APIView):
    permission_classes = [IsPartner]
    def get(self, request):
        turfs = TurfDetails.objects.all()
        serializer = TurfDetailsSerializer(turfs, many=True)
        return Response(serializer.data)
    
class ApproveTurfView(APIView):
    # permission_classes = [IsSuperUser]
    def patch(self, request, pk):
        try:
            turf = TurfDetails.objects.get(pk=pk)
        except TurfDetails.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        turf.approved = True
        turf.save()
        return Response(status=status.HTTP_200_OK)
    
class RejectTurfView(APIView):
    # permission_classes = [IsSuperUser]
    def patch(self, request, pk):
        try:
            turf = TurfDetails.objects.get(pk=pk)
        except TurfDetails.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        turf.approved = False
        turf.save()
        return Response(status=status.HTTP_200_OK)
        
class ViewTurfUserView(APIView):
    # permission_classes = 
    def get(self, request, pk):
        if TurfDetails.objects.filter(id=pk).exists():
            turf = TurfDetails.objects.get(id=pk)
            serializer = TurfDetailsSerializer(turf)
            return Response(serializer.data)
        else:
            return Response(False)
             
class TurfRetrieveUpdateDestroyView(APIView):
    permission_classes = [IsPartner]
    def get(self, request, pk):
        if TurfDetails.objects.filter(turf_id=pk).exists():
            turf = TurfDetails.objects.get(turf_id=pk)
            # courts = turf.price.all()
            # print(courts)
            serializer = TurfDetailsSerializer(turf)
            return Response(serializer.data)
        else:
            return Response(False)
            
    def put(self, request, pk):
        turf = TurfDetails.objects.get(id=pk)
        print(request.data)
        serializer = TurfDetailsSerializer(turf, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    
    def delete(self, request, pk):
        turf = TurfDetails.objects.get(pk=pk)
        turf.delete()
        return Response("Turf deleted successfully")
    
class SetTurfPriceView(APIView):
    permission_classes = [IsPartner]
    def post(self, request):
        print(request.data)
        serializer =  TurfPricingSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
        # return Response("done")
        