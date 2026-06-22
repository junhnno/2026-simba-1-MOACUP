from django.urls import path
from . import views

urlpatterns = [
    path('', views.plus_info, name='plus_info'),
    path('plus/', views.plus, name='plus'),
    path('product/', views.product, name='product'),
    path('signup/', views.signup, name='signup'),
    path('login/', views.login, name='login'),
    path('agree/', views.agree, name='agree'),
    path('main/', views.main, name='main'),
]
