function get(id){
	return document.getElementById(id);
}

function changeToRed(element){
	element.style.background = "#FF0000";
}
/*
var letzterScreen = 1;

function screenForward(){
	var naechsterScreen = letzterScreen+1;

	var letztesDiv = $(".screen"+letzterScreen);
	var naechstesDiv = $("screen"+naechsterScreen);
	console.log("naechster: " + naechstesDiv + " \nhat ID " + "screen"+naechsterScreen);
	letztesDiv.className = "screen";
	naechstesDiv.className = "screen active";

	var letztesRegister = $(".register"+letzterScreen);
	var naechstesRegister = document.getElementById("register"+naechsterScreen);

	letztesRegister.className = "register animated";
	naechstesRegister.className = "register animated active ";

	letztesRegister = naechstesRegister;

	}
}*/

function screenForward(event){
  // Identify ourselves, as we got clicked
  var $screens = $( this );
  
  // Change the state...
  if ( $screens.hasClass( 'active' ) ) {
    // if we are inactive, deactivate all (the others)
    $screens.removeClass( 'active' );
    
    // -- activate ourselves
    $screens.next('.screen').addClass( 'active' );
    
    // -- stick our info into the line
    /*var klasse_text = $myself.text();
    $( '#klasse' ).text( klasse_text );*/
  }
}
$( '#screen1' ).on( 'click', screenForward );
$( '#screen2' ).on( 'click', screenForward );
$( '#screen3' ).on( 'click', screenForward );
$( '#screen4' ).on( 'click', screenForward );
$( '#screen5' ).on( 'click', screenForward );

/*$('#reiter5' ).html( $('#button2').html() );

function clickedOnRegister(nr){

	var naechstesRegister = get("register" + nr);
	var naechstesDiv = get("screen" + nr);

	naechstesRegister.className = "register animated active";
	naechstesDiv.className = "screen active";

	var letztesRegister = get("register" + letzterScreen);
	var letztesDiv = get("screen" + letzterScreen);

	//schnelle version wäre z.b.
	//get("register1").className = "randomShit";
	//get("register1").style.background = "white";

	letztesRegister.className = "register animated";
	letztesDiv.className = "screen";

	letzterScreen = nr;
}*/