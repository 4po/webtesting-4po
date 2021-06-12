$( document ).ready(function() {

    // Hauteur de la section du héros
    $(function(){
    	var windowH = $(window).height() ;
    	var wrapperH = $('.hero').height() ;
    	if(windowH > wrapperH) {                            
    		$('.hero').css({hauteur' :($(window).height())+'px'}) ;
    	}                                                                               
    	$(window).resize(function(){
    		var windowH = $(window).height() ;
    		var wrapperH = $('.hero').height() ;
    		var differenceH = windowH - wrapperH ;
    		var newH = wrapperH + differenceH ;
    		var truecontentH = $('#truecontent').height() ;
    		if(windowH > truecontentH) {
    			$('.hero').css('height', (newH)+'px') ;
    		}

    	})          
    }) ;


}) ;
© 2021 GitHub, Inc.
