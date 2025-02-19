from django.db import models
from django.contrib.auth.models import User, AbstractBaseUser, PermissionsMixin, BaseUserManager
# Create your models here.
class UserAccountManager(BaseUserManager):
    def create_user(self, email, name,is_agent, password=None,password2=None):
        if not email:
            raise ValueError('user must be an Email Address')
        email = self.normalize_email(email)
        user = self.model(email=email, name=name, is_agent=is_agent)
        user.set_password(password)
        user.is_staff = False
        user.save()
        return user

    def create_superuser(self, email, name,is_agent, password=None):
        user = self.create_user(email, name,is_agent, password)
        user.is_superuser = True
        user.is_staff= True
        user.save()
        return user


class UserAccount(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length=255, unique=True)
    name = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)
    is_agent = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    objects = UserAccountManager()
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name','is_agent']

    def get_full_name(self):
        return self.name + ' ' + self.is_agent

    def gt_short_name(self):
        return self.name

    def __str__(self):
        return self.name
    # def has_module_perms(self, perm ,obj=None):
        # return self.is_admin
    # def has_module_perms(self, app_label ):
        # return True
    # @property
    # def is_staff(self):
    #     return self.is_admin