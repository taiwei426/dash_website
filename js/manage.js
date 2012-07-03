// JavaScript Document
$(document).ready(function() {
	
	navBar();
	/*not sure what this does */
	
	/* Scroll event handler. Dots do not reflect current page */
    $(window).bind('scroll',function(e){
    	manageScroll();
		navBar();
		bottomNavBar();
    });
    
/* manage page */
	$('a.dashboard').click(function(){
    	$('html, body').animate({
    		scrollTop:0
    	}, 1000, function() {
	    	manageScroll(); // Callback is required for iOS
		});
    	return false;
	});
    $('a.upload').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#upload').offset().top
    	}, 1000, function() {
	    	manageScroll(); // Callback is required for iOS
		});
    	return false;
    });
	$('a.download').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#download').offset().top
    	}, 1000, function() {
	    	manageScroll(); // Callback is required for iOS
		});
    	return false;
    });
    $('a.apphelp').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#apphelp').offset().top
    	}, 1000, function() {
	    	manageScroll(); // Callback is required for iOS
		});
    	return false;
    });
	$('a.guardians').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#guardians').offset().top
    	}, 1000, function() {
	    	manageScroll(); // Callback is required for iOS
		});
    	return false;
    });
    $('a.tagging').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#tagging').offset().top
    	}, 1000, function() {
	    	manageScroll(); // Callback is required for iOS
		});
    	return false;
    });
    $('a.playlist').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#playlist').offset().top
    	}, 1000, function() {
	    	manageScroll(); // Callback is required for iOS
		});
    	return false;
    });
    $('a.calllog').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#calllog').offset().top
    	}, 1000, function() {
	    	manageScroll(); // Callback is required for iOS
		});
    	return false;
    });
    $('a.data').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#data').offset().top
    	}, 1000, function() {
	    	manageScroll(); // Callback is required for iOS
		});
    	return false;
    });
});

/* Scroll the background layers: MAIN */
function manageScroll(){
	var scrolled = $(window).scrollTop();
	$('#parallax-bg1').css('top',(0-(scrolled*.25))+'px');
	$('#parallax-bg2').css('top',(0-(scrolled*.00))+'px');
}

/* Set navigation dots to an active state as the user scrolls */
function navBar(){
	var section1Top =  0;
	// The top of each section is offset by half the distance to the previous section.
	var section2Top =  $('#upload').offset().top - (($('#download').offset().top - $('#upload').offset().top) / 2);
	var section3Top =  $('#download').offset().top - (($('#apphelp').offset().top - $('#download').offset().top) / 2);
	var section4Top =  $('#apphelp').offset().top - (($('#guardians').offset().top - $('#apphelp').offset().top) / 2);
	var section5Top =  $('#guardians').offset().top - (($('#tagging').offset().top - $('#guardians').offset().top) / 2);
	var section6Top =  $('#tagging').offset().top - (($('#playlist').offset().top - $('#tagging').offset().top) / 2);
	var section7Top =  $('#playlist').offset().top - (($('#calllog').offset().top - $('#playlist').offset().top) / 2);
	var section8Top =  $('#calllog').offset().top - (($('#data').offset().top - $('#calllog').offset().top) / 2);
	var section9Top =  $('#data').offset().top - (($(document).height() - $('#data').offset().top) / 2);;
		
		$('nav#primaryLeft a').removeClass('active');
	if($(document).scrollTop() >= section1Top && $(document).scrollTop() < section2Top){
		$('nav#primaryLeft a.dashboard').addClass('active');
	} else if ($(document).scrollTop() >= section2Top && $(document).scrollTop() < section3Top){
		$('nav#primaryLeft a.upload').addClass('active');
	} else if ($(document).scrollTop() >= section3Top && $(document).scrollTop() < section4Top){
		$('nav#primaryLeft a.download').addClass('active');
	} else if ($(document).scrollTop() >= section4Top && $(document).scrollTop() < section5Top){
		$('nav#primaryLeft a.apphelp').addClass('active');
	} else if ($(document).scrollTop() >= section5Top && $(document).scrollTop() < section6Top){
		$('nav#primaryLeft a.guardians').addClass('active');
	} else if ($(document).scrollTop() >= section6Top && $(document).scrollTop() < section6Top){
	$('nav#primaryLeft a.tagging').addClass('active');
	} else if ($(document).scrollTop() >= section7Top && $(document).scrollTop() < section6Top){
		$('nav#primaryLeft a.playlist').addClass('active');
	} else if ($(document).scrollTop() >= section8Top && $(document).scrollTop() < section6Top){
		$('nav#primaryLeft a.calllog').addClass('active');
	} else if ($(document).scrollTop() >= section9Top){
		$('nav#primaryLeft a.data').addClass('active');
	}
	/* gray background behind the navigation */	
		$('nav#barBg a').removeClass('active');
	if($(document).scrollTop() >= section1Top && $(document).scrollTop() < section2Top){
		$('nav#barBg a.dashboard').addClass('active');
	} else if ($(document).scrollTop() >= section2Top && $(document).scrollTop() < section3Top){
		$('nav#barBg a.upload').addClass('active');
	} else if ($(document).scrollTop() >= section3Top && $(document).scrollTop() < section4Top){
		$('nav#barBg a.download').addClass('active');
	} else if ($(document).scrollTop() >= section4Top && $(document).scrollTop() < section5Top){
		$('nav#barBg a.apphelp').addClass('active');
	} else if ($(document).scrollTop() >= section4Top && $(document).scrollTop() < section6Top){
		$('nav#barBg a.apphelp').addClass('active');
	} else if ($(document).scrollTop() >= section4Top && $(document).scrollTop() < section6Top){
		$('nav#barBg a.apphelp').addClass('active');
	} else if ($(document).scrollTop() >= section4Top && $(document).scrollTop() < section6Top){
		$('nav#barBg a.apphelp').addClass('active');
	} else if ($(document).scrollTop() >= section4Top && $(document).scrollTop() < section6Top){
		$('nav#barBg a.apphelp').addClass('active');
	} else if ($(document).scrollTop() >= section4Top){
		$('nav#barBg a.apphelp').addClass('active');
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


