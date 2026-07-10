from django.core.management.base import BaseCommand
from django.contrib.auth import get_user_model

User = get_user_model();

class Command(BaseCommand):
    help = "Create test users for Playwright"

    def handle(self, *args, **kwargs):

        if not User.objects.filter(username="admin").exists():
            User.objects.create_superuser(
                username="admin",
                email="admin@test.com",
                password="german123",
                first_name="Admin"
            )
            self.stdout.write(
                self.style.SUCCESS("Superuser 'admin' created.")
            )
        else:
            self.stdout.write(
                self.style.WARNING("Superuser already exists.")
            )