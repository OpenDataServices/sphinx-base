Tables
======

Grid Tables
-----------

It is possible to include tables directly using reStructuredText grids (though it can a lot of typing for larger tables):

.. code-block:: rest

    +------------------------+------------+----------+----------+
    | Header row, column 1   | Header 2   | Header 3 | Header 4 |
    | (header rows optional) |            |          |          |
    +========================+============+==========+==========+
    | body row 1, column 1   | column 2   | column 3 | column 4 |
    +------------------------+------------+----------+----------+
    | body row 2             | Cells may span columns.          |
    +------------------------+------------+---------------------+
    | body row 3             | Cells may  | - Table cells       |
    +------------------------+ span rows. | - contain           |
    | body row 4             |            | - body elements.    |
    +------------------------+------------+----------+----------+
    | body row 5             | Cells may also be     |          |
    |                        | empty: ``-->``        |          |
    +------------------------+-----------------------+----------+

+------------------------+------------+----------+----------+
| Header row, column 1   | Header 2   | Header 3 | Header 4 |
| (header rows optional) |            |          |          |
+========================+============+==========+==========+
| body row 1, column 1   | column 2   | column 3 | column 4 |
+------------------------+------------+----------+----------+
| body row 2             | Cells may span columns.          |
+------------------------+------------+---------------------+
| body row 3             | Cells may  | - Table cells       |
+------------------------+ span rows. | - contain           |
| body row 4             |            | - body elements.    |
+------------------------+------------+----------+----------+
| body row 5             | Cells may also be     |          |
|                        | empty: ``-->``        |          |
+------------------------+-----------------------+----------+

Various generators can be used to make this process less tiresome, e.g. `reStructuredText Table Editor and Generator <https://tableconvert.com/restructuredtext-generator>`_

CSV Tables
----------

Tables can also be loaded from CSV files:

.. code-block:: rest

   .. csv-table:: CSV Title
      :file: table-1.csv
      :header-rows: 1

.. csv-table:: CSV Title
   :file: table-1.csv
   :header-rows: 1

Or included inline:

.. code-block:: rest

   .. csv-table:: Optional title
      :header: "Animal", "Furry", "Pettability [a.u.]"

      "Cat", "Yes", 9
      "Dog", "Yes", 9
      "Naked mole rat", "No",  5

.. csv-table:: Optional title
   :header: "Animal", "Furry", "Pettability [a.u.]"

   "Cat", "Yes", 9
   "Dog", "Yes", 9
   "Naked mole rat", "No",  5

List Tables
-----------

Tables can also be created from lists:

.. code-block:: rest

   .. list-table:: Table Title
      :widths: 25 25 50
      :header-rows: 1

      * - Heading row 1, column 1
        - Heading row 1, column 2
        - Heading row 1, column 3
      * - Row 1, column 1
        -
        - Row 1, column 3
      * - Row 2, column 1
        - Row 2, column 2
        - Row 2, column 3

.. list-table:: Table Title
   :widths: 25 25 50
   :header-rows: 1

   * - Heading row 1, column 1
     - Heading row 1, column 2
     - Heading row 1, column 3
   * - Row 1, column 1
     -
     - Row 1, column 3
   * - Row 2, column 1
     - Row 2, column 2
     - Row 2, column 3
