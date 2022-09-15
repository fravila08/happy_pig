
import re
from urllib import response
from django.http import HttpResponse, JsonResponse
from .models import *
from django.contrib.auth import authenticate, login, logout
from rest_framework.decorators import api_view
from django.core import serializers
from rest_framework.response import Response
from dotenv import load_dotenv
import os

# Create your views here.
load_dotenv()

def send_the_homepage(request):
    theIndex = open('static/index.html').read()
    return HttpResponse(theIndex)

#This will create a signup route NOTE: this doesnt render anything instead it's specifically 
# dedicated to altering the datbase by creating new users that can sign in or out
@api_view(['POST'])
def sign_up(request):
    try:
        AppUser.objects.create_user(name=request.data['name'], username=request.data['email'], password=request.data['password'], email=request.data['email'])
    except Exception as e:
        print(str(e))
    return HttpResponse('Youve signed up')

@api_view(['POST'])
def log_in(request):
    email = request.data['email']
    password=request.data['password']
    user = authenticate(username= email, password = password)
    if user is not None:
        if user.is_active:
            try:
                login(request._request, user)
            except Exception as e:
                print(str(e))
            return HttpResponse('Youre logged in')
        else: 
            return HttpResponse('Not Active')
    else:
        return HttpResponse('No user recognized')
    
@api_view(['POST'])
def log_out(request):
    logout(request)
    return HttpResponse('Logged Out')

@api_view(['GET'])                
def curr_user(request):
    if request.user.is_authenticated:
        data= serializers.serialize("json", [request.user], fields=['name', 'email', 'password'])
        return HttpResponse(data)
    else:
        return JsonResponse({'user':None})
    
@api_view(['PUT'])
def add_to_cart(request):
    try:
        title=request.data['title']
        price=request.data['price']
        quantity= request.data['quantity']
        user=request.user
        special_instructions=request.data['special_instructions']
        cart_item=Cart.objects.create(title=title, price=price, user=user, special_instructions=special_instructions, quantity = quantity)
        cart_item.save()
        return Response({"msg":"new item added"})
    except Exception as e:
        print(e)
        return Response({"msg":"failure to add item"})

@api_view(['GET'])
def cart(request):
    user=request.user
    cart_content=Cart.objects.filter(user = user).values()
    return Response(list(cart_content))

@api_view(['GET'])
def profile(request):
    user=AppUser.objects.values()
    return Response(user)

@api_view(['GET'])
def editItem(request, id):
    try:
        item=Cart.objects.filter(id=id).values()
        print(item)
        return Response(list(item)[0])
    except Exception as e:
        return Response(e)
    
    
@api_view(["PUT", "DELETE"])
def updateCart(request, id):
    cartItem=Cart.objects.get(id = id)
    if request.method =="PUT":
        special_instructions= request.data["special_instructions"]
        quantity = request.data["quantity"]
        cartItem.special_instructions = special_instructions
        cartItem.quantity = quantity
        cartItem.save()
        return Response({"msg":"item was edited"})
    if request.method == "DELETE":
        cartItem.delete()
        return Response({"msg":"item deleted"})
    
@api_view(["GET"])
def getKeys(request):
    canadianrapidkey=os.environ['canadianrapidkey']
    pizzarapidkey=os.environ['pizzarapidkey']
    print(canadianrapidkey, pizzarapidkey)
    return Response({
        "pizzarapidkey":pizzarapidkey,
        "canadianrapidkey":canadianrapidkey
    })
    
print(os.environ['canadianrapidkey'])