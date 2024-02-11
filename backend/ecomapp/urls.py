from django.urls import path, include
from ecomapp import views


urlpatterns = [
    path("", views.getRoutes, name="routes"),
]
