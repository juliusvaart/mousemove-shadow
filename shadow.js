// Generated by CoffeeScript 1.8.0
(function() {
  (function($) {
    return $.fn.shadow = function(shadow_type, data_array) {
      var $this, $window, window_height, window_width;
      $this = $(this);
      $window = $(window);
      window_height = $window.height();
      window_width = $window.width();
      $window.resize(function() {
        window_height = $(this).height();
        return window_width = $(this).width();
      });
      return $.each($this, function(index, object) {
        var $object;
        $object = $(object);
        return $window.on("mousemove", function(event) {
          var css_data, css_data_string, item, obj_centerX, obj_centerY, text_shadow_x, text_shadow_y, _i, _len, _ref;
          if (($window.scrollTop() + window_height > (_ref = $object.offset().top + $object.height() / 2) && _ref > $window.scrollTop())) {
            obj_centerX = $object.offset().left + $object.width() / 2;
            obj_centerY = $object.offset().top + $object.height() / 2;
            text_shadow_x = (obj_centerX - event.pageX) * obj_centerX / window_width / obj_centerX;
            text_shadow_y = (obj_centerY - event.pageY) * obj_centerY / window_height / obj_centerY;
            css_data_string = "";
            for (index = _i = 0, _len = data_array.length; _i < _len; index = ++_i) {
              item = data_array[index];
              if (index !== 0) {
                css_data_string += ", ";
              }
              css_data_string += "" + (text_shadow_x * item["width"]) + "px " + (text_shadow_y * item["width"]) + "px " + item["color"];
            }
            css_data = {};
            css_data[shadow_type] = css_data_string;
            return $object.css(css_data);
          }
        });
      });
    };
  })(jQuery);

}).call(this);
