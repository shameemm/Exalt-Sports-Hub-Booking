# Generated by Django 4.1.5 on 2023-04-10 10:34

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('turf', '0007_remove_turfdetails_map_link_turfdetails_lat_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Pricing',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('court', models.CharField(max_length=100)),
                ('price', models.DecimalField(decimal_places=2, max_digits=10)),
                ('turf', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='turf.turfdetails')),
            ],
        ),
    ]