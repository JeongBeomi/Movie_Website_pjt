from django.urls import path
from . import views

urlpatterns = [
     path('', views.review_list),
     path('', views.review_detail),

]
