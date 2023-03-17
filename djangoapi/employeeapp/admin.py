from django.contrib import admin

from .models import Department,Employees

# Register your models here.
admin.site.register(Employees)
admin.site.register(Department)