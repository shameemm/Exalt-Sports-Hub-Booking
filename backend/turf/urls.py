from .views import AddTurfDetailsView,TurfDetailsView,TurfRetrieveUpdateDestroyView
from django.urls import path

urlpatterns=[
    path('add-details/', AddTurfDetailsView.as_view(),name='add-details'),
    path('get-details/', TurfDetailsView.as_view(),name='get-details'),
    path('get-details/<int:pk>/', TurfRetrieveUpdateDestroyView.as_view(), name='get_details/id'),
]