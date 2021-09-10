# Generated by Django 3.2.7 on 2021-09-09 06:05

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Pet',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=255)),
                ('age', models.DateField()),
                ('isAgeAproximated', models.BooleanField(default=False)),
            ],
        ),
    ]
