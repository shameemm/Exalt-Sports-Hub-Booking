from rest_framework import serializers
from .models import TurfDetails
from accounts.models import UserData
from accounts.serializers import UserSerializer
        
class TurfDetailsSerializer(serializers.ModelSerializer):
    turf = UserSerializer()
    class Meta:
        model = TurfDetails
        fields = ['turf',
                  'id',
                  'place',
                  'lat',
                  'lng',
                  'fives',
                  'sevens',
                  'elevens',
                  'cricket',
                  'cafe',
                  'first_aid',
                  'locker',
                  'parking',
                  'shower',
                  'logo',
                  'approved']
        
    def create(self, validated_data):
        turf = TurfDetails.objects.create(turf=validated_data['turf'],place=validated_data['place'],lat=validated_data['lat'],lng=validated_data['lng'],fives=validated_data['fives'],sevens=validated_data['sevens'],elevens=validated_data['elevens'],cricket=validated_data['cricket'],cafe=validated_data['cafe'],first_aid=validated_data['first_aid'],locker=validated_data['locker'],parking=validated_data['parking'],shower=validated_data['shower'],logo=validated_data['logo'],approved=validated_data['approved']) 
        turf.save()
        return turf  
    
class TurfUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = TurfDetails
        fields = ['turf','id', 'place','lat','lng','fives','sevens','elevens','cricket','cafe','first_aid','locker','parking','shower','logo','approved']
        
    def create(self, validated_data):
        turf = TurfDetails.objects.create(turf=validated_data['turf'],place=validated_data['place'],lat=validated_data['lat'],lng=validated_data['lng'],fives=validated_data['fives'],sevens=validated_data['sevens'],elevens=validated_data['elevens'],cricket=validated_data['cricket'],cafe=validated_data['cafe'],first_aid=validated_data['first_aid'],locker=validated_data['locker'],parking=validated_data['parking'],shower=validated_data['shower'],logo=validated_data['logo'],approved=validated_data['approved']) 
        turf.save()
        return turf  

     
    
    
   