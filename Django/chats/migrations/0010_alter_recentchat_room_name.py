# Generated by Django 3.2.4 on 2021-08-11 12:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('chats', '0009_alter_recentchat_room_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='recentchat',
            name='room_name',
            field=models.CharField(blank=True, max_length=100, unique=True),
        ),
    ]
