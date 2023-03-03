from django.urls import path
from .views import RegisterView,MyTokenObtainPairView,MyAdminTokenObtainPairView
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
urlpatterns = [
    path('api/login/', MyTokenObtainPairView.as_view(), name="token_obtain_pair"),
    path('api/admin_login/',MyAdminTokenObtainPairView.as_view(), name="admin_token_obtain_pair"),
    path('api/login/refresh/', TokenRefreshView.as_view(), name = 'token_refresh'),
    path('api/register/',RegisterView.as_view(),name="sign_up"),
]
