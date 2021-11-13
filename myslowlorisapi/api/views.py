from django.shortcuts import render
from django.http import JsonResponse


def get_routes(request):
    return JsonResponse('Test Slow Loris API', safe=False)
# Create your views here.
