from dataclasses import fields
from pyexpat import model
from statistics import mode
from rest_framework import serializers
from .models import Department,Employees

class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model=Department
        fields=("Departmentid","Departmentname")

class EmployeesSerializer(serializers.ModelSerializer):
    class Meta:
        model=Employees
        fields=("EmployeeId","EmployeeName","Department","dateofjoin","photofilename")