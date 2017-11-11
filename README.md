Userpoints
==========

The userpoints module provides the ability for users to gain
points upon doing certain actions, such as:

- posting a node (different points can be awarded for different
  node types, e.g. page, story, forum, image, ...etc.)
- posting a comment
- moderating a comment

Upon deleting a node or a comment the number of points is subtracted.
If a node or comment author is changed points are transferred respectively

The number of points for each of the above actions is configurable by
the site adminsitrator.

A transaction log is created for each event. The log is viewable by
the admin.

Points can be moderated, i.e. approval can be done by the admin at a later
time.

A block displays the number of points the user gained. Another block 
displays the top 5 users who earned points.

Using real money, users can purchase points from your ecommerce store
as well. Moreover, the points can be used as currency for ecommerce as well,
as in a form of payment

This module is useful in providing an incentive for users to participate
in the site, and be more active. The module is easily extended through use of 
the API (see below)

Initially sponsored by: http://artalyst.com

Installation
------------

Install according to usual Backdrop instructions.

Configuration
-------------

To enable this module do the following:

1. Go to Admin -> Modules, and enable userpoints.
   Check the messages to make sure that you did not get any errors
   on database creation.

2. Go to Admin -> Configuration -> User accounts -> Points.
   Configure the options as per your requirements

3. Go to Admin -> User accounts -> Permissions and configure as desired.

API
---

The API documentation can be found at api.worldempire.ch/api/userpoints.

License
-------

This project is GPL v2 software. See the LICENSE.txt file in this directory for
complete text.

Current Maintainers
-------------------
 - docwilmot (https://github.com/docwilmot

Author and credits
-----------------

Khalid Baheyeldin (http://baheyeldin.com/khalid and http://2bits.com)

The Drupal 7 version of this module is maintained by Berdir
(http://drupal.org/user/214652).

If you use this module, find it useful, and want to send the author
a thank you note, then use the Feedback/Contact page at the URL above.

The author can also be contacted for paid customizations of this
and other modules.


