from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from django.shortcuts import render
from django.shortcuts import get_object_or_404, get_list_or_404

from .serializers import ReviewListSerializer, ReviewSerializer
from .models import Review, Comment




# Create your views here.
@api_view(['GET', 'POST'])
def review_list(request):
    if request.method == 'GET':
        # articles = Article.objects.all()
        reviews = get_list_or_404(Review)
        serializer = ReviewListSerializer(reviews, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = ReviewSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            # serializer.save()
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(['GET', 'DELETE', 'PUT'])
def review_detail(request):
    pass