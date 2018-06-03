from setuptools import setup, find_packages
from tor_app import __version__

with open('README.md', 'r') as f:
    long_desc = f.read()

if __name__ == '__main__':
    setup(
        name='gupas',
        version=__version__,
        description="A web app to aid in transcription of internet content.",
        long_description=long_desc,
        license='MIT',
        classifiers=['Development Status :: 2'],  # pre-alpha
        # Get strings from http://pypi.python.org/pypi?%3Aaction=list_classifiers
        url='https://github.com/GrafeasGroup/tor_app',
        zip_safe=False,
        include_package_data=True,
        packages=find_packages(),
        provides=find_packages(
            include=['tor_app'], exclude=['test', 'test.*', '*.test', '*.test.*']
        ),
        setup_requires=(
            'wheel',
        ),
        install_requires=(
            'django>=2.0.6'
        )
    )
