from django.shortcuts import render

def main(request):
    return render(request, 'main.html')

def signup(request):
    return render(request, 'signup.html')

def terms(request):
    return render(request, 'terms.html')

def product(request):
    return render(request, 'product.html')

def plus(request):
    return render(request, 'plus.html')

def plus_info(request):
    return render(request, 'plus_info.html')