from rest_framework import serializers
from .models import Movie

class MoviesListSerializer(serializers.ModelSerializer):
    # genres = serializers.CharField(source='genres', read_only=True)

    class Meta:
        model = Movie
        fields = '__all__'


 