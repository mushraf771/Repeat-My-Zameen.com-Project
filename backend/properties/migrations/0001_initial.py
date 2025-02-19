# Generated by Django 4.0.4 on 2022-06-08 18:22

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Properties',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('slug', models.CharField(max_length=255, unique=True)),
                ('title', models.CharField(max_length=155)),
                ('address', models.CharField(max_length=150)),
                ('city', models.CharField(choices=[('Lahore', 'Lahore'), ('Islamabad', 'Islamabad'), ('Karachi', 'Karachi'), ('Multan', 'Multan')], default='Lahore', max_length=50)),
                ('state', models.CharField(choices=[('Punjab', 'Punjab'), ('Sindh', 'Sindh'), ('KPK', 'Kpk'), ('Balochistan', 'Balochistan')], default='Punjab', max_length=50)),
                ('description', models.TextField(blank=True)),
                ('sale_type', models.CharField(blank=True, choices=[('For Sale', 'For Sale'), ('For Rent', 'For Rent')], default='For Sale', max_length=50)),
                ('property_type', models.CharField(blank=True, choices=[('Plot', 'Plot'), ('Home', 'Home'), ('Shop', 'Shop')], max_length=50)),
                ('plot_type', models.CharField(blank=True, choices=[('Commercial', 'Commercial'), ('Residential', 'Residential'), ('Industrial', 'Industrial'), ('Agricultural', 'Agricultural')], max_length=50)),
                ('shop_type', models.CharField(blank=True, choices=[('Medical Store', 'Medical Store'), ('Cloth Shop', 'Cloth Shop'), ('Cosmetics Shop', 'Cosmetics Shop'), ('General Store', 'General Store'), ('Mobile Shop', 'Mobile Shop')], max_length=50)),
                ('home_type', models.CharField(blank=True, choices=[('Home', 'Home'), ('Flat', 'Flat'), ('Form House', 'Form House')], max_length=50)),
                ('price', models.IntegerField()),
                ('bedrooms', models.IntegerField(blank=True, null=True)),
                ('bathrooms', models.IntegerField(blank=True, null=True)),
                ('area_type', models.CharField(choices=[('Marla', 'Marla'), ('Kanal', 'Kanal'), ('SQFT', 'Sqft')], max_length=50)),
                ('area_size', models.IntegerField()),
                ('main_image', models.ImageField(blank=True, upload_to='photos/%y/%m/%d/')),
                ('photo_1', models.ImageField(blank=True, upload_to='photos/%y/%m/%d/')),
                ('photo_2', models.ImageField(blank=True, upload_to='photos/%y/%m/%d/')),
                ('photo_3', models.ImageField(blank=True, upload_to='photos/%y/%m/%d/')),
                ('photo_4', models.ImageField(blank=True, upload_to='photos/%y/%m/%d/')),
                ('photo_5', models.ImageField(blank=True, upload_to='photos/%y/%m/%d/')),
                ('photo_6', models.ImageField(blank=True, upload_to='photos/%y/%m/%d/')),
                ('photo_7', models.ImageField(blank=True, upload_to='photos/%y/%m/%d/')),
                ('photo_8', models.ImageField(blank=True, upload_to='photos/%y/%m/%d/')),
                ('is_published', models.BooleanField(default=False)),
                ('list_date', models.DateTimeField(blank=True, default=django.utils.timezone.now)),
                ('agent', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, related_name='agentuser', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
