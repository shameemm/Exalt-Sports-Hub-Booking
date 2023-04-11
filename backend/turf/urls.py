from .views import *
from django.urls import path

urlpatterns=[
    path('add-details/', AddTurfDetailsView.as_view(),name='add-details'),
    path('get-details/', TurfDetailsView.as_view(),name='get-details'),
    path('get-details/<int:pk>/', TurfRetrieveUpdateDestroyView.as_view(), name='get_details/id'),
    path('approve-turf/<int:pk>/', ApproveTurfView.as_view(), name='approve-turf'),
    path('view-turf/<int:pk>/', ViewTurfUserView.as_view(), name='view-turf'),
    path('reject-turf/<int:pk>/', RejectTurfView.as_view(), name='approve-turf'),
    path('add-pricing/',SetTurfPriceView.as_view(), name='add-pricing'),
]