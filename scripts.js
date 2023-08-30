// Add your JavaScript code here
$(document).ready(function () {
  // Toggle submenu on click
  $('.menu-item.dropdown').click(function () {
    $(this).find('.submenu').toggleClass('active');
  });

  // Prevent submenus from closing when clicked
  $('.submenu').click(function (e) {
    e.stopPropagation();
  });
});
  // Add an event handler for when a menu item is hovered
  $(".menu-item").hover(
    function() {
      // Show the white square
      $(".white-square").css("transform", "scaleY(1)");
    },
    function() {
      // Hide the white square
      $(".white-square").css("transform", "scaleY(0)");
    }
  );
});
