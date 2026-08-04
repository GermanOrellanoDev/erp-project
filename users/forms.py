from django import forms
from django.contrib.auth.forms import AuthenticationForm
from .models import User

class LoginForm(AuthenticationForm):

    username = forms.CharField(
        label = 'Username',
        widget = forms.TextInput(attrs={
            'class': 'form-control',
            'placeholder': 'Enter your username',
            'data-testid': 'username-input'
        })
    )

    password = forms.CharField(
        label = 'Password',
        widget = forms.PasswordInput(attrs={
            'class': 'form-control',
            'placeholder': 'Enter your password',
            'data-testid': 'password-input'
        })
    )

    class Meta:
        model = User
        fields = ['username', 'password']