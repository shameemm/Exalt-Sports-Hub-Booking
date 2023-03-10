# Generated by Django 4.1.5 on 2023-03-13 12:53

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import turf.models


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('turf', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='turfdetails',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to=turf.models.upload_to),
        ),
        migrations.AlterField(
            model_name='turfdetails',
            name='cafe',
            field=models.BooleanField(default=False, null=True),
        ),
        migrations.AlterField(
            model_name='turfdetails',
            name='cricket',
            field=models.BooleanField(default=False, null=True),
        ),
        migrations.AlterField(
            model_name='turfdetails',
            name='elevens',
            field=models.BooleanField(default=False, null=True),
        ),
        migrations.AlterField(
            model_name='turfdetails',
            name='fives',
            field=models.BooleanField(default=False, null=True),
        ),
        migrations.AlterField(
            model_name='turfdetails',
            name='locker',
            field=models.BooleanField(default=False, null=True),
        ),
        migrations.AlterField(
            model_name='turfdetails',
            name='map_link',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='turfdetails',
            name='parking',
            field=models.BooleanField(default=False, null=True),
        ),
        migrations.AlterField(
            model_name='turfdetails',
            name='place',
            field=models.CharField(max_length=150, null=True),
        ),
        migrations.AlterField(
            model_name='turfdetails',
            name='rest_room',
            field=models.BooleanField(default=False, null=True),
        ),
        migrations.AlterField(
            model_name='turfdetails',
            name='sevens',
            field=models.BooleanField(default=False, null=True),
        ),
        migrations.AlterField(
            model_name='turfdetails',
            name='shower',
            field=models.BooleanField(default=False, null=True),
        ),
        migrations.AlterField(
            model_name='turfdetails',
            name='turf',
            field=models.OneToOneField(null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]
