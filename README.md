rework-selector-rename
======================

Rename css selectors based on an input array of match/replace pairs.

Input css:

```css
.black {
  color: black;
}
.u-left {
  float: left;
}
.fontSize-large {
  font-size: 30px;
}
```

```js
var rename = require('rework-selector-rename');

var replacements = [
    [".black", ".color-black"]
  , [ /^\.u-/, "."]
  , [ /[A-Z]/g, function(m) { return '-' + m.toLowerCase() }]
];

var css = rework()
  .use(rename(replacements))
  .toString();
```

Result:

```css
.color-black {
  color: black;
}
.left {
  float: left;
}
.font-size-large {
  font-size: 30px;
}
```
