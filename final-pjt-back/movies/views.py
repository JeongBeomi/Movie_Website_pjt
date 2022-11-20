from rest_framework.response import Response
from rest_framework import status

from django.shortcuts import render

from rest_framework.decorators import api_view
from .serializers import MovieListSerializer, MovieSerializer
from .models import Movie

# Create your views here.
@api_view(['GET'])
def filtergenre(request, genre_id):
    if request.method == 'GET':
        movies = Movie.objects.filter(genres__in=[genre_id])
        serializer = MovieListSerializer(movies, many=True)
        return Response(serializer.data)


@api_view(['GET'])
def sortby(request, keyword):
    if request.method == 'GET':
        if keyword in ['popularity', 'vote_average', 'release_date']:
            # movies = Movie.objects.all().order_by(f'-{keyword}')[0:50]
            movies = Movie.objects.filter(vote_count__gte=30).order_by(f'-{keyword}')[0:50]
            serializer = MovieListSerializer(movies, many=True)
            return Response(serializer.data)
        else:
            return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['GET'])
def movie_detail(request, movie_id):
    if request.method == 'GET':
        movie = Movie.objects.get(pk=movie_id)
        serializer = MovieSerializer(movie)
        return Response(serializer.data)

