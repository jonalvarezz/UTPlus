// Copyright (c) 2014 Jonathan Alvarez <@jonalvarezz>. All rights reserved.

var inputID 		= document.getElementById( 'txtUrio' );
var form 			= document.getElementById( 'frm_Inicio' );
var submitButton 	= document.getElementById( 'enviar' );

//focus me please!
inputID.focus();

//Add a listener to keypress number  13 (Intro key), and emulate a click
form.addEventListener('keypress', function(e){
	if ( e.keyCode == 13 ) {
    	submitButton.click();
 	}

});
