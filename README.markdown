prepopulate
===========

load form field values from url params.

 * introduction
 * documentation
 * more information

introduction
------------

this is a simple script to load form field values based on
url parameters.  it is expecting the key of the param to
match either the id or name of an input field.

example:

```html
<form>
  <input type="text" id="foo">
  <input type="text" name="bar">
</form>
```

entering the url `example.com/form.html?foo=hello&amp;bar=world`
would enter the value "hello" into the `foo` field and
"world" into the `bar` field on page load.

for a more complete example, check out the `example` folder.

documentation
-------------

_nothing yet_

more information
----------------

_nothing yet_
