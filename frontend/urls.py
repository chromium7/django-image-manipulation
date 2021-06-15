from django.urls import path

from .views import index

urlpatterns = [
    path('', index, name="home"),
    path('about/', index),
    path('features/', index),
    path('edit/', index),

]