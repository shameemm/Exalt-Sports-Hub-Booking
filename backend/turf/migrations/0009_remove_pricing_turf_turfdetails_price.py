# Generated by Django 4.1.5 on 2023-04-10 11:47

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('turf', '0008_pricing'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='pricing',
            name='turf',
        ),
        migrations.AddField(
            model_name='turfdetails',
            name='price',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='turf.pricing'),
        ),
    ]
