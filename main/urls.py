from django.urls import path
from . import views

urlpatterns = [
    path('', views.cup_start, name='cup_start'),
    path('select/', views.cup_select, name='cup_select'),
    path('ing/', views.cup_ing, name='cup_ing'),
    path('result/', views.cup_result, name='cup_result'),
    path('link/', views.cup_link, name='cup_link'),
]
