from django.urls import path
from . import views

urlpatterns = [
     path('', views.review_list),
     path('<int:review_pk>/', views.review_detail),

]
