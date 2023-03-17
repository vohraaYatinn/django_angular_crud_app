
from django.db import models

# Create your models here.
class Department(models.Model):
    Departmentid= models.AutoField(primary_key=True)
    Departmentname= models.CharField(max_length=100)

class Employees(models.Model):
    EmployeeId=models.AutoField(primary_key=True)
    EmployeeName = models.CharField(max_length=100)
    Department = models.CharField(max_length=100)
    dateofjoin = models.DateField()
    photofilename = models.CharField(max_length=255)

