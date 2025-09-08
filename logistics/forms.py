# C:\Django\cms_env\logistic_manager\logistics\forms.py

from django import forms
from .models import Provider, Service, Newsletter, News

from django import forms

class NewsletterForm(forms.ModelForm):
    class Meta:
        model = Newsletter
        fields = '__all__'

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        if self.instance.pk:  # Si ya existe el newsletter
            self.fields['news_items'].queryset = self.instance.news_items.all()
        else:
            self.fields['news_items'].queryset = News.objects.none()  # Vacío para nuevos newsletters

class ProviderForm(forms.ModelForm):
    services = forms.ModelMultipleChoiceField(queryset=Service.objects.all(), widget=forms.CheckboxSelectMultiple)

    class Meta:
        model = Provider
        fields = ['name', 'description', 'services', 'address', 'phone_number', 'email', 'image']
