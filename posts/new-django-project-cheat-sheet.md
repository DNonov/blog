---
title: New Django project cheat sheet
slug: new-django-project-cheat-sheet
tags: 'django'
abstract: 'This is the way to get your new django project.'
isPublished: true
publishDate: 27.11.2021
updateDate: 10.05.21
---

For some weird reason I allays have to google these stuff. So this blog post
will act as my cheat sheet.

``` bash
# You can start new python environment.
python3 -m venv ENV_NAME

# Activate your python environment.
source ENV_NAME/bin/activate

# Install Django.
pip install django

# Create Django project.
django-admin startproject helloDjango

# Create a django app.
django-admin startapp django_app

# Add django app to settings.py
INSTALLED_APPS = [
  'django.contrib.admin',
  'django.contrib.auth',
  'django.contrib.contenttype',
  'django.contrib.sessions',
  'django.contrib.messages',
  'django.contrib.staticfiles',
  'django_app'
]

# Create initial data base tables.
python3 manage.py migrate

# Do the migrations.
python3 manage.py makemigrations

# Run the server.
python3 manage.py runserver

# Add superuser.
python3 manage.py create superuser
```
