jquery.japanese-input-change
============================

a jQuery plugin which calls a handler function when texts inputted with Japanese IME change

## API

```
$(selector).japaneseInputChange(handler)
```

The handler is called when the text value is changed from the original value.
During the IME has uncommitted text, the handler will not be called.

```
$(context).japaneseInputChange(selector, handler)
```

With this version, the handler is called for selector matching elements
created after the function call too.  Internally jQuery
```.on(events, selector, handler)``` is used.

## Supported browsers

IE10+, Firefox, Chrome, Safari.
Browsers with support of `focus`, `blur`, `compositionstart`, `compositionend`, and `input` events.

## examples

* [a basic example](http://hnakamur.github.io/jquery.japanese-input-change/example.html)
* [a live event example](http://hnakamur.github.io/jquery.japanese-input-change/live-example.html)
* [SlickGrid filtering example](http://hnakamur.github.io/slickgrid_example/)
