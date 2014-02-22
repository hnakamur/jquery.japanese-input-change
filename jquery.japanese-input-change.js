/*! Japanese input change plugin for jQuery.
    https://github.com/hnakamur/jquery.japanese-input-change
    (c) 2014 Hiroaki Nakamura
    MIT License
 */
(function($, undefined) {
  $.fn.japaneseInputChange = function(delay, handler) {
    var el = this,
        readyToSetTimer = true,
        isFirefox = navigator.userAgent.indexOf('Firefox') != -1,
        oldVal,
        timer;

    function callHandler(context, e) {
      val = el.val();
      if (val != oldVal) {
        handler.call(context, e);
        oldVal = val;
      }
    }

    el.focus(function() {
      oldVal = el.val();
    }).blur(function(e) {
      callHandler(this, e);
    }).keyup(function(e) {
      var context = this, val;

      if (timer !== undefined) {
        clearTimeout(timer);
        timer = undefined;
      }

      // When Enter is pressed, IME commits text.
      if (e.which == 13 || isFirefox) {
        readyToSetTimer = true;
      }

      // Set timer only when IME does not have uncommitted text.
      if (readyToSetTimer) {
        timer = setTimeout(function() {
          // Check readyToSetTimer again here for the scenario below.
          // 1. The user change the text.
          // 2. The timer is set.
          // 3. The user presses keys and IME has some uncommitted text.
          //    before timer fires.
          if (readyToSetTimer) {
            callHandler(context, e);
          }
        }, delay);
      }
    }).keydown(function(e) {
      if (isFirefox) {
        // Firefox fires keydown for the first key, does not fire
        // keydown nor keyup event during IME has uncommitted text, 
        // fires keyup when IME commits or deletes all uncommitted text.
        readyToSetTimer = false;
      } else {
        // IE, Chrome and Safari fires events with e.which = 229 for
        // every keydown during IME has uncommitted text.
        // Note:
        // For IE, Chrome and Safari, I cannot detect the moment when
        // you delete all uncommitted text with pressing ESC or Backspace
        // appropriate times, so readyToSetTimer remains false at the moment.
        //
        // However, it is not a problem. Because the text becomes same
        // as oldVal at the moment, we does not invoke handler anyway.
        //
        // Next time key is pressed and if it causes text to change,
        // keydown with e.which != 229 occurs, readyToSetTimer becomes
        // true and handler will be invoked.
        readyToSetTimer = (e.which != 229);
      }
    });
  };
}(jQuery));
