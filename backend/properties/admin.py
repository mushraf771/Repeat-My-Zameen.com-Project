from django.contrib import admin
from .models import Properties
@admin.register(Properties)
class PropertiesAdmin(admin.ModelAdmin):
    list_display = ('id','agent','slug', 'sale_type',
                    'property_type', 'price', 'is_published', 'list_date','last_update')
    list_display_links = ('id','price','agent','slug',)
    search_fields= ('id','title',)
    list_per_page= 25