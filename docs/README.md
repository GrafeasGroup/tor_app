# Development

Welcome to the official app for the Grafeas Group (or, as you may know us better, TranscribersOfReddit)! If you're wanting to hack on it, here's what you need to know.

To run the server from the command line, there are few extra pieces you need to complete.

```bash
# get the dev-specific requirements
pip install dev_requirements.txt
# get the regular app requirements
pip install -e .
python manage.py migrate
```
```bash
# actually running the server
python manage.py runserver --settings=tor_app.local_settings
```

This file will be updated as time goes on and / or more requirements are added.