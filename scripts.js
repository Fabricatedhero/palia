// Add your JavaScript code here
$(document).ready(function () {
  // Toggle submenu on click
  $('.menu-item.dropdown').click(function () {
    $(this).find('.submenu').toggleClass('active');
  });
  $('.menu-item.dropdown').click(function () {
    $(this).find('.submenu-map').toggleClass('active');
  });


  // Prevent submenus from closing when clicked
  $('.submenu').click(function (e) {
    e.stopPropagation();
  });
  $('.submenu-map').click(function (e) {
    e.stopPropagation();
  });
});