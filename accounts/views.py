from django.shortcuts import redirect, render
from django.contrib import auth
from django.contrib.auth.models import User

def login(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']

        user = auth.authenticate(request, username=username, password=password)

        if user is not None:
            auth.login(request, user)
            return redirect('accounts:login') # 나중에 수정
        else:
            return render(request, 'accounts/login.html')
    
    elif request.method == 'GET':
        return render(request, 'accounts/login.html')

def logout(request):
    auth.logout(request)
    return redirect('accounts:login')

def signup(request):
    if request.method == 'POST':
        if request.POST['password'] == request.POST['confirm']:
            new_user = User.objects.create_user(
                username=request.POST['username'],
                password=request.POST['password'],
            )
            
            profile = new_user.profile
            profile.nickname = request.POST['nickname']
            profile.is_terms_agreed = True
            profile.save()

            auth.login(request, new_user)
            return redirect('accounts:login')  # 나중에 수정
    
    return render(request, 'accounts/signup.html')

def terms_detail(request):
    return render(request, 'accounts/terms.html')