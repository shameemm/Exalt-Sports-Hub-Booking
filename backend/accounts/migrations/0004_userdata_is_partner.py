# Generated by Django 4.1.5 on 2023-02-01 12:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0003_alter_userdata_name_alter_userdata_phone'),
    ]

    operations = [
        migrations.AddField(
            model_name='userdata',
            name='is_partner',
            field=models.BooleanField(default=False),
        ),
    ]
