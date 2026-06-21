from django.shortcuts import render

def cup_start(request):
    return render(request, 'cup_start.html')

def cup_select(request):
    return render(request, 'cup_select.html')

def cup_ing(request):
    return render(request, 'cup_ing.html')

def cup_result(request):
    return render(request, 'cup_result.html')

def cup_link(request):
    return render(request, 'cup_link.html')
