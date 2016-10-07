(function($) {
  "use strict"; // Start of use strict

  // Sticky offset top.
  $(document).ready(function() {
    _sticky_set_offset_top();

    $('.page-scroll').bind('click', function(e) {
      e.preventDefault();
      var id = $(this).attr('href');
      $('body, html').animate({
        scrollTop: $(id).offset().top - 140
      }, 1250);
    });
  });

  $(window).resize(_sticky_set_offset_top);

  function _sticky_set_offset_top() {
    $("nav.navbar").each(function(index) {
      if ($(this).data('spy') == 'affix') {
        $(this).attr('data-offset-top', $(this).offset().top - 40);
      }
    });
  }

})(jQuery); // End of use strict
