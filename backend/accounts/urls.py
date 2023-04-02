from django.urls import path
from .views import RegisterView,MyTokenObtainPairView,SendOtp,MyAdminTokenObtainPairView
from .views import SendOtp,RegisterView
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
urlpatterns = [
    path('api/login/', MyTokenObtainPairView.as_view(), name="token_obtain_pair"),
    path('api/admin_login/',MyAdminTokenObtainPairView.as_view(), name="admin_token_obtain_pair"),
    path('api/login/refresh/', TokenRefreshView.as_view(), name = 'token_refresh'),
    path('api/register/',RegisterView.as_view(),name="sign_up"),
    path('api/send-otp/',SendOtp.as_view(),name='sent-otp')
]
