# Generated by Django 4.1.5 on 2023-03-26 11:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('turf', '0006_alter_turfdetails_turf'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='turfdetails',
            name='map_link',
        ),
        migrations.AddField(
            model_name='turfdetails',
            name='lat',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='turfdetails',
            name='lng',
            field=models.CharField(max_length=100, null=True),
        ),
    ]
