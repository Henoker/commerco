# Generated by Django 5.0.2 on 2024-03-12 18:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("users", "0001_initial"),
    ]

    operations = [
        migrations.AlterModelManagers(
            name="customuser",
            managers=[],
        ),
        migrations.AlterField(
            model_name="customuser",
            name="username",
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
    ]
