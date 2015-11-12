// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require twitter/bootstrap
//= require turbolinks
//= require_tree .

$(document).ready(function(){
	setTimeout(function(){
    	$('.error-messages').fadeToggle("slow");
 	 }, 2000);
 })

$(document).on('mouseenter', '#security-signup-icon', function () {
	$('.security-signup-p').fadeToggle();
});

$(document).on('mouseleave', '#security-signup-icon', function () {
	$('.security-signup-p').fadeToggle('slow');
});

$(document).ready(function () {
	$(".dashboard-notifications-box > p").hide();
});

$(document).on('click', '.dashboard-notifications-header', function () {
	$(this).siblings().toggle("slow");
});


