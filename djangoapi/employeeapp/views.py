from traceback import print_tb
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from employeeapp.models import Department,Employees
from employeeapp.serializers import DepartmentSerializer,EmployeesSerializer
from django.core.files.storage import default_storage

# Create your views here.

@csrf_exempt
def departmentApi(request,id=False):
    if request.method == "GET":
        if id!=False:
            departments = Department.objects.filter(Departmentid=id)
            departments_serializer = DepartmentSerializer(departments,many=True)
            return JsonResponse(departments_serializer.data,safe=False)
        else:
            departments = Department.objects.all()
            departments_serializer = DepartmentSerializer(departments,many=True)
            return JsonResponse(departments_serializer.data,safe=False)

    elif request.method == "POST":
        print(request)
        departments_data = JSONParser().parse(request)
        print(departments_data)
        departments_serializer = DepartmentSerializer(data=departments_data)
        if departments_serializer.is_valid():
            departments_serializer.save()
            return JsonResponse("added successfully",safe=False)
        return JsonResponse("Failed to add",safe=False)
    elif request.method == "PUT":
        departments_data =  JSONParser().parse(request)
        department= Department.objects.get(Departmentid=departments_data["Departmentid"])
        departments_serializer = DepartmentSerializer(department,data=departments_data)
        if departments_serializer.is_valid():
            departments_serializer.save()
            return JsonResponse("Updated successfully",safe=False)
        return JsonResponse("Failed to update",safe=False)
    elif request.method == "DELETE":
        department= Department.objects.get(Departmentid=id)
        department.delete()
        return JsonResponse("Deleted Successfully!!",safe=False)

@csrf_exempt
def employeedept(request,id=False):
    if request.method == "GET":
        Employees = Employees.objects.all()
        Employees_serializer = EmployeesSerializer(Employees,many=True)
        return JsonResponse(Employees_serializer.data,safe=False)
    elif request.method == "POST":
        employee_data = JSONParser().parse(request)
        Employees_serializer = EmployeesSerializer(data=employee_data)
        if Employees_serializer.is_valid():
            Employees_serializer.save()
            return JsonResponse("added successfully",safe=False)
        return JsonResponse("Failed to add",safe=False)
    elif request.method == "PUT":
        employee_data =  JSONParser().parse(request)
        employee= Employees.objects.get(EmployeeId=employee_data["EmployeeId"])
        Employees_serializer = EmployeesSerializer(employee,data=employee_data)
        if Employees_serializer.is_valid():
            Employees_serializer.save()
            return JsonResponse("Updated successfully",safe=False)
        return JsonResponse("Failed to update",safe=False)
    elif request.method == "DELETE":
        Employees= Employees.objects.get(EmployeeId=id)
        Employees.delete()
        return JsonResponse("Deleted Successfully!!",safe=False)

@csrf_exempt
def Savefile(request):
    file = request.FILES["uploadedfiles"]
    file_name = default_storage.save(file.name,file)

    return JsonResponse(file_name,safe=False)



