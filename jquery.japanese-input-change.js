/*! Japanese input change plugin for jQuery.
    https://github.com/hnakamur/jquery.japanese-input-change
    (c) 2014 Hiroaki Nakamura
    MIT License
 */
(function($, undefined) {
  $.fn.japaneseInputChange = function(selector, handler) {
    var isComposing,
      oldVal,
      callHandler = function(e) {
        var $el = $(e.target), val = $el.val();
        if (val != oldVal) {
          handler.call($el, e);
          oldVal = val;
        }
      };

    if (handler === undefined) {
      handler = selector;
      selector = null;
    }

    return this.on('focus', selector, function(e) {
      oldVal = $(e.target).val();
    })
    .on('blur', selector, function(e) {
      callHandler(e);
    })
    .on('compositionstart', selector, function(e) {
      isComposing = true;
    })
    .on('compositionend', selector, function(e) {
      isComposing = false;
    })
    .on('input', selector, function(e) {
      if (!isComposing) {
        callHandler(e);
      }
    });
  };
}(jQuery));
