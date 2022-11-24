from django.urls import path
from . import views

urlpatterns = [
    path('genres/<str:genre_id>/', views.filtergenre),
    path('order/<str:keyword>/', views.sortby),
    path('detail/<int:movie_id>/', views.movie_detail),
    path('search/', views.search_movie),
]

