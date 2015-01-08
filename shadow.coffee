(($) ->
    $.fn.shadow = (shadow_type, data_array) ->
        $this = $ @
        $window = $ window
        window_height = $window.height()
        window_width = $window.width()

        $window.resize ->
            window_height = $(@).height()
            window_width = $(@).width()

        $.each $this, (index, object) ->
            $object = $ object

            $window.on "mousemove", (event) ->
                if $window.scrollTop() + window_height > $object.offset().top + $object.height() / 2 \
                                                       > $window.scrollTop()
                    obj_centerX = $object.offset().left + $object.width() / 2
                    obj_centerY = $object.offset().top + $object.height() / 2
                    text_shadow_x = (obj_centerX - event.pageX) * obj_centerX / window_width / obj_centerX
                    text_shadow_y = (obj_centerY - event.pageY) * obj_centerY / window_height / obj_centerY
                    css_data_string = ""
                    for item, index in data_array
                        if index != 0
                            css_data_string += ", "
                        css_data_string += "#{text_shadow_x * item["width"]}px
                                            #{text_shadow_y * item["width"]}px
                                            #{item["color"]}"
                    css_data = {}
                    css_data[shadow_type] = css_data_string
                    $object.css css_data
) jQuery
