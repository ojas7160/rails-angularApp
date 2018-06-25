// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require angular
//= require jquery
//= require noty/js/noty/packaged/jquery.noty.packaged.min.js
//= require noty/jquery.noty
//= require noty/layouts/bottom
//= require noty/themes/default
//= require sweetalert
//= require angular-route
//= require activestorage
//= require_tree ./angular


// require turbolinks


$(function() {
  $.noty.defaults = {
    layout: 'topCenter',
    theme: 'relax', // or 'relax'
    type: 'alert',
    text: '', // can be html or string
    dismissQueue: true, // If you want to use queue feature set this true
    template: '<div class="noty_message"><span class="noty_text"></span><div class="noty_close"></div></div>',
    animation: {
        open: {height: 'toggle'}, // or Animate.css class names like: 'animated bounceInLeft'
        close: {height: 'toggle'}, // or Animate.css class names like: 'animated bounceOutLeft'
        easing: 'swing',
        speed: 400 // opening & closing animation speed
    },
    timeout: 2000, // delay for closing event. Set false for sticky notifications
    force: false, // adds notification to the beginning of queue when set to true
    modal: false,
    maxVisible: 5, // you can set max visible notification for dismissQueue true option,
    killer: false, // for close all notifications before show 
    closeWith: ['click'],// ['click', 'button', 'hover', 'backdrop'] // backdrop click will close all notifications
    callback: {
      onShow: function() {},
      afterShow: function() {},
      onClose: function() {},
      afterClose: function() {},
      onCloseClick: function() {},
    },
    buttons: false // an array of buttons
  };
  // if ( !! noty_option) {
  //   noty({text: noty_option, type: "notice"});
  // }
});
