from django import forms
from .models import Material

class MaterialForm(forms.ModelForm):

    class Meta:
        model = Material
        fields = ['id_material', 'name', 'description', 'unit', 'material_type', 'status']

class CsvUploadForm(forms.Form):
    csv_file = forms.FileField(
        label='Archivo CSV de materiales',
        help_text='El archivo debe contener encabezados que coincidan con los campos del modelo.'
    )