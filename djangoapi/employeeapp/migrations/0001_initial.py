# Generated by Django 4.1.1 on 2022-09-12 09:33

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Department',
            fields=[
                ('Departmentid', models.AutoField(primary_key=True, serialize=False)),
                ('Departmentname', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Employees',
            fields=[
                ('EmployeeId', models.AutoField(primary_key=True, serialize=False)),
                ('EmployeeName', models.CharField(max_length=100)),
                ('Department', models.CharField(max_length=100)),
                ('dateofjoin', models.DateField()),
                ('photofilename', models.CharField(max_length=255)),
            ],
        ),
    ]
