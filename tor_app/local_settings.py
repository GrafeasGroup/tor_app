# noinspection PyUnresolvedReferences
from tor_app.settings.local import *
import better_exceptions

# trust me, this will make your life better.
better_exceptions.MAX_LENGTH = None

# Use this file when developing locally -- it has some helpful additions which
# change how the server runs.

DEBUG = True
ALLOWED_HOSTS = ['*']
