Admonitions
===========

Admonitions
-----------

Admonitions are intended for including side content without significantly interrupting the document flow. There are a limited number of directives:

.. code-block:: rest

   .. attention::
      Stop! - This in important

.. attention::
   Stop! - This in important

.. code-block:: rest

   .. caution::
      Beware of the trolls

.. caution::
   Beware of the trolls

.. code-block:: rest

   .. danger::
      Beware killer rabbits!

.. danger::
   Beware killer rabbits!

.. code-block:: rest

   .. error::
      There is currently a problem.

.. error::
   There is currently a problem.

.. code-block:: rest

   .. hint::
      Maybe read the docs.

.. hint::
   Maybe read the docs.

.. code-block:: rest

   .. important::
      Important info

.. important::
   Important info

.. code-block:: rest

   .. note::
      This project is under active development.

.. note::
   This project is under active development.

.. code-block:: rest

   .. tip::
      Use mkdocs instead

.. tip::
   Use mkdocs instead

.. code-block:: rest

   .. warning::
      This may not work

.. warning::
   This may not work

.. code-block:: rest

   .. seealso::
      More info here

.. seealso::
   More info here

.. deprecated:: 3.1
   Use :func:`spam` instead.

.. code-block:: rest

   .. todo::
      This needs fixing

.. todo::
   This needs fixing


Custom Admonitions
------------------

Custom admonitions are possible using docutils i.e.:

.. code-block:: rest

   .. admonition:: Limitation

      Description of the limitations

.. admonition:: Limitation

   Description of the limitations

The class attribute can be set to another admonition type:

.. code-block:: rest

   .. admonition:: Limitation
      :class: hint

      Description of the limitations

.. admonition:: Limitation
   :class: hint
   
   Description of the limitations

The class attribute can be set to another admonition type:

.. code-block:: rest

   .. admonition:: Dropdown
      :class: dropdown, toggle-shown

      Remove toggle-shown class to start closed

.. admonition:: Dropdown
   :class: dropdown, toggle-shown

   Remove toggle-shown class to start closed

This requires the sphinx_togglebutton extention to be installed.

It is also possible to customise using css:

.. code-block:: css

   .admonition.external-link {
     border-color: rgb(190, 93, 130);
     background-color: rgb(190, 93, 130, 0.25);
   }
   .admonition.external-link > .admonition-title {
     background-color: rgba(190, 93, 130, 0.5);
     border-color: rgb(190, 93, 130);
   }
   .admonition.external-link > .admonition-title::before {
     content: "\f0c1";
   }

.. code-block:: rest

   .. admonition:: Open Data Services
      :class: external-link

      Link to the website: `Open Data Services <https://opendataservices.coop/>`_

.. admonition:: Open Data Services
   :class: external-link

   Link to the website: `Open Data Services <https://opendataservices.coop/>`_


