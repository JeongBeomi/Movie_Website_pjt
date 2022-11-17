from rest_framework.response import Response

from django.shortcuts import render

from rest_framework.decorators import api_view
from .serializers import MoviesListSerializer
from .models import Movie



# Create your views here.

def filtergenre(reqeust, key):
    pass

@api_view(['GET', 'POST'])
def sortby(request):
    movies = Movie.objects.all()
    serializer = MoviesListSerializer(movies, many=True)
    print(serializer)
    return Response(serializer.data)
    
