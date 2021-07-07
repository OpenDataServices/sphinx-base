Open Data Services Sphinx Base
==============================


## Examples

Table without horizonal scrollbar:

```{eval-rst}
.. list-table::
    :header-rows: 1
    :widths: 1 3 1 1

    * - A
      - B
      - C
      - D
    * - Lorem
      - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum urna non purus tristique pharetra.
      - Yes
      - False
    * - Ipsum
      - Mauris et lobortis nibh. Nullam vitae velit turpis. Vestibulum facilisis sit amet sapien nec maximus.
      - No
      - True
    * - Dolor
      - Pellentesque sit amet sapien tincidunt, fringilla dui id, porttitor purus. Nam tincidunt ac ex id porttitor. Praesent varius lectus nisl, ac luctus erat lacinia vitae.
      - Yes
      - True
```

### Markdown reference links

Link to [a ref](a-ref).


```{eval-rst}
.. _a-ref:
```
#### Referenced section

# Markdown inside an admonition

```{eval-rst}
.. admonition:: Admonition
    :class: hint

    .. markdown::

        Some markdown [a URL](http://example.org), `single backtick literals`.
```

(from <https://sphinxcontrib-opendataservices.readthedocs.io/en/latest/misc/>)

# JSONSchema

```{eval-rst}
.. jsonschema:: _static/example_schema.json
```

# JSONSchema with docson

<script src="_static/docson/widget.js" data-schema="../../_static/example_schema.json"></script>

For more examples see <https://sphinxcontrib-opendataservices.readthedocs.io/en/latest/jsonschema/>

## Contents

```{eval-rst}
.. toctree::
   :maxdepth: 2

   about

```
