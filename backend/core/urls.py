from django.urls import path
from .views import RegisterAPIView, LoginAPIView

urlpatterns = [
    # path('admin/', admin.site.urls),
    # path('test/', views.send_some_data),
    path('register', RegisterAPIView.as_view()),
    path('login', LoginAPIView.as_view())
]