// JavaScript Document
$(document).ready(function() {

	/* Scroll event handler. Dots do not reflect current page */
    $(window).bind('scroll',function(e){
    	privacyScroll();
    });
    
	
	$('a.dashboard').click(function(){
    	$('html, body').animate({
    		scrollTop:0
    	}, 1000, function() {
	    	privacyScroll(); // Callback is required for iOS
		});
    	return false;
	});
});
/* Scroll the background layers */
function privacyScroll(){
	var scrolled = $(window).scrollTop();
	$('#privacy-bg1').css('top',(0-(scrolled*.25))+'px');
	$('#privacy-bg2').css('top',(0-(scrolled*.00))+'px');
}


