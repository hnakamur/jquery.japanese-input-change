jquery.japanese-input-change
============================

a jQuery plugin which calls a handler function when texts inputted with Japanese IME change

## API

```
$(selector).japaneseInputChange(delay, handler)
```

The handler is called after delay when input key events become idle and the
text value is changed from the original value.
During the IME has uncommitted text, the handler will not be called.

```
$(context).japaneseInputChange(selector, delay, handler)
```

With this version, the handler is called for selector matching elements
created after the function call too.  Internally jQuery
```.on(events, selector, handler)``` is used.

## examples

* [a basic example](http://hnakamur.github.io/jquery.japanese-input-change/example.html)
* [a live event example](http://hnakamur.github.io/jquery.japanese-input-change/live-example.html)
* [SlickGrid filtering example](http://hnakamur.github.io/slickgrid_example/)
