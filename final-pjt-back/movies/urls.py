from django.urls import path
from . import views

urlpatterns = [
    path('genres/<key>', views.filtergenre),
    path('1/', views.sortby),
]

