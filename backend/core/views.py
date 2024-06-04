# from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import exceptions
from .serializers import UserSerializer

# Create your views here.
class RegisterAPIView(APIView):
    def post(self, request):
        data = request.data

        if data['password'] != data['password_confirm']:
            raise exceptions.APIException('Passwords do not match!')
        
        serializer = UserSerializer(data=data)
        serializer.is_valid(raise_exception=True)
        serializer.save() 
        return Response(serializer.data)
        # return Response(request.data)