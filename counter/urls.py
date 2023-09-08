from django.urls import path

from .views import IndexView, CountView

urlpatterns = [
    path("", IndexView.as_view()),
    path("count/", CountView.as_view()),
]