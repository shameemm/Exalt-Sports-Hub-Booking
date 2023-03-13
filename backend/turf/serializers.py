from rest_framework import serializers
from .models import TurfDetails

class TurfDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = TurfDetails
        fields = ('turf', 'place','map_link','fives','sevens','elevens','cricket','cafe','rest_room','locker','parking','shower')
        
    def create(self, validated_data):
        turf = TurfDetails.objects.create(turf=validated_data['turf'],place=validated_data['place'],map_link=validated_data['map_link'],fives=validated_data['fives'],sevens=validated_data['sevens'],elevens=validated_data['elevens'],cricket=validated_data['cricket'],cafe=validated_data['cafe'],rest_room=validated_data['rest_room'],locker=validated_data['locker'],parking=validated_data['parking'],shower=validated_data['shower'])  
        
        turf.save()
        return turf
    
   