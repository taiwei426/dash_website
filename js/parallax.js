$(document).ready(function() {
	
	navBar();
	/*not sure what this does */
	
	/* Scroll event handler. Dots do not reflect current page */
    $(window).bind('scroll',function(e){
    	parallaxScroll();
		navBar();
		bottomNavBar();
    });
    
	/* index pages*/
	$('a.about').click(function(){
    	$('html, body').animate({
    		scrollTop:0
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
	});
    $('a.howitworks').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#howitworks').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
	$('a.news').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#news').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
    $('a.team').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#team').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
	$('a.support').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#support').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
	$('a.contact').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#contact').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
});

/* Scroll the background layers */
function parallaxScroll(){
	var scrolled = $(window).scrollTop();
	$('#parallax-bg1').css('top',(0-(scrolled*.25))+'px');
	$('#parallax-bg2').css('top',(0-(scrolled*.00))+'px');
}

/* Set navigation dots to an active state as the user scrolls */
function navBar(){
	var section1Top =  0;
	// The top of each section is offset by half the distance to the previous section.
	var section2Top =  $('#howitworks').offset().top - (($('#news').offset().top - $('#howitworks').offset().top) / 2);
	var section3Top =  $('#news').offset().top - (($('#team').offset().top - $('#news').offset().top) / 2);
	var section4Top =  $('#team').offset().top - (($('#support').offset().top - $('#team').offset().top) / 2);
	var section5Top =  $('#support').offset().top - (($('#contact').offset().top - $('#support').offset().top) / 2);
	var section6Top =  $('#contact').offset().top - (($(document).height() - $('#contact').offset().top) / 2);;
		
		$('nav#primaryLeft a').removeClass('active');
	if($(document).scrollTop() >= section1Top && $(document).scrollTop() < section2Top){
		$('nav#primaryLeft a.about').addClass('active');
	} else if ($(document).scrollTop() >= section2Top && $(document).scrollTop() < section3Top){
		$('nav#primaryLeft a.howitworks').addClass('active');
	} else if ($(document).scrollTop() >= section3Top && $(document).scrollTop() < section4Top){
		$('nav#primaryLeft a.news').addClass('active');
	} else if ($(document).scrollTop() >= section4Top && $(document).scrollTop() < section5Top){
		$('nav#primaryLeft a.team').addClass('active');
	} else if ($(document).scrollTop() >= section5Top && $(document).scrollTop() < section6Top){
		$('nav#primaryLeft a.support').addClass('active');
	} else if ($(document).scrollTop() >= section6Top){
		$('nav#primaryLeft a.contact').addClass('active');
	}
	/* gray background behind the navigation */	
		$('nav#barBg a').removeClass('active');
	if($(document).scrollTop() >= section1Top && $(document).scrollTop() < section2Top){
		$('nav#barBg a.about').addClass('active');
	} else if ($(document).scrollTop() >= section2Top && $(document).scrollTop() < section3Top){
		$('nav#barBg a.howitworks').addClass('active');
	} else if ($(document).scrollTop() >= section3Top && $(document).scrollTop() < section4Top){
		$('nav#barBg a.news').addClass('active');
	} else if ($(document).scrollTop() >= section4Top && $(document).scrollTop() < section5Top){
		$('nav#barBg a.team').addClass('active');
	} else if ($(document).scrollTop() >= section5Top && $(document).scrollTop() < section6Top){
		$('nav#barBg a.support').addClass('active');
	} else if ($(document).scrollTop() >= section6Top){
		$('nav#barBg a.contact').addClass('active');
	}
}
/* gray background behind the bottom navigation...i don't think it works yet... */	
function bottomNavBar(){
	var section1Top =  0;;
	$('nav#bottomBarBg a').removeClass('active');
	if($(document).scrollTop() >= section1Top && $(document).scrollTop() < section2Top){
		$('nav#bottomBarBg a.privacy').addClass('active');
	}
		$('nav#bottomBarBg a').removeClass('active');
		if($(document).scrollTop() >= section1Top && $(document).scrollTop() < section2Top){
		$('nav#barBg a.privacy').addClass('privacy');
		}
}

