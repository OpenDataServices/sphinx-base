# sphinx-base

The base Sphinx setup (recommonmark + internationalisation) for Open Data
Services docs projects.

## Building the documentation

### Build the docs locally
  
Assuming a unix based system with Python 3 installed:


```
python3 -m venv .ve    
pip install -r requirements.txt
source .ve/bin/activate
cd docs
make dirhtml
```

### Translations

Translations are generally done using this transifex project.
Create one at https://www.transifex.com/OpenDataServices/add/ :
* Select "Public project" and "File-based Project".
* Add the url of the project to this README, e.g. https://www.transifex.com/OpenDataServices/sphinx-base/dashboard/

How to push new text up to Transifex:

First, do a local build, then:

```
cd docs
make gettext
sphinx-intl update-txconfig-resources --transifex-project-name <project-name>
tx push -s
```

When the translations are filled in transifex you need to run:

```
tx pull -a -f
```

These should then be commited and then pushed to GitHub (so that actual
deployed translations are always version controlled).

Running the build in another language:

```
make -e SPHINXOPTS="-D language='<language code>'" html
```

If translations are added locally, these can also be pushed up to Transifex:

```
tx push -t --skip
```
