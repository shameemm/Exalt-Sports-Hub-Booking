from rest_framework import serializers
from .models import TurfDetails

class TurfDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = TurfDetails
        fields = ('turf', 'place','map_link','fives','sevens','elevens','cricket','cafe','first_aid','locker','parking','shower','logo')
        
    def create(self, validated_data):
        turf = TurfDetails.objects.create(turf=validated_data['turf'],place=validated_data['place'],map_link=validated_data['map_link'],fives=validated_data['fives'],sevens=validated_data['sevens'],elevens=validated_data['elevens'],cricket=validated_data['cricket'],cafe=validated_data['cafe'],first_aid=validated_data['first_aid'],locker=validated_data['locker'],parking=validated_data['parking'],shower=validated_data['shower'],logo=validated_data['logo']) 
        turf.save()
        return turf
    
   