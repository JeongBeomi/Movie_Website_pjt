from django.urls import path
from . import views

urlpatterns = [
     path('', views.review_list),
     path('my_review/<int:user_pk>/', views.my_review_list),
     path('<int:review_pk>/', views.review_detail),

]
