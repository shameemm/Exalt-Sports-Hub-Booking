from .views import TurfDetailsView
from django.urls import path

urlpatterns=[
    path('add-details/', TurfDetailsView.as_view(),name='add-details')
]