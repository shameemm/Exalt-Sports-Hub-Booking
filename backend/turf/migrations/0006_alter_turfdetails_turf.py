# Generated by Django 4.1.5 on 2023-03-23 09:02

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('turf', '0005_turfdetails_approved'),
    ]

    operations = [
        migrations.AlterField(
            model_name='turfdetails',
            name='turf',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]
