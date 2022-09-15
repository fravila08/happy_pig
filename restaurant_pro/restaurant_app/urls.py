from django.urls import path
from . import views

urlpatterns = [
    path('', views.send_the_homepage, name='home'),
    path('sign_up', views.sign_up, name='sign_up'),
    path('sign_in', views.log_in, name='sign_in'),
    path('sign_out', views.log_out, name='sign_out'),
    path('curr_user', views.curr_user, name='curr_user'),
    path('add_to_cart', views.add_to_cart, name='addtocart'),
    path('cart', views.cart, name='cart'),
    path('profile', views.profile, name='profile'),
    path('update/<int:id>', views.updateCart, name='update'),
    path('editItem/<int:id>', views.editItem, name='editItem'),
    path('getKeys', views.getKeys, name='keys'),
]
