$(document).ready(function () {
	//alert("fuuuuuuuuuckkkkkkk");

function screenForward (event) {

	// Activate Screen
    var $screens = $(this).closest('.screen');
    $screens.removeClass( 'active' );
    $screens.next('.screen').addClass( 'active' );

	// Activate Register
	$('.register').removeClass('active');
	$('register').prevAll('.register').addClass('used')
	$('[data-id=' + $screens.data('next-id') + ']').addClass('active');
}

$( '#screen1').find('.button.button-success').on('click', screenForward );
$( '#screen2' ).find( '.button' ).on( 'click', screenForward );
$( '#screen3' ).find( '.button ').on('click', screenForward );
$( '#screen4' ).find( '.button.button-success').on('click',screenForward );
$( '#screen5' ).on('click',screenForward );


$('.button.button-success').on( 'click', function( e ){
	var inhalt = [
		$('#value1').html(),
		$('#value2').html(),
		$('#value3').html(),
		$('#value4').html()
	];
	$('#register1-from').html(  inhalt[0]  );
	$('#register2-to').html(  inhalt[1]  );
	$('#register3-via').html(  inhalt[2]  );
	$('#register4-date').html(  inhalt[3]  );
});

$('#button-oneWay' ).on( 'click', function( e ){
	var inhalt = $( this).html();
	$('#register2 span').html(  inhalt  );
});

$('#button-backWay' ).on( 'click', function( e ){
	var inhalt = $( this).html();
	$('#register2 span').html(  inhalt  );
});

$('#button-1class' ).on( 'click', function( e ){
	var inhalt = $( this).html();
	$('#register3 span ').html(  inhalt  );
});
$('#button-2class' ).on( 'click', function( e ){
	var inhalt = $( this).html();
	$('#register3 span ').html(  inhalt  );
});
$('#success4').on( 'click',function( e ){
	$('#register5 span ').html('180.00 CHF | 147.70 EUR');
});


function registerForward(event){

	// Activate Register
	var $register = $(this);
	$('.register').removeClass('active').removeClass('used');
	$register.prevAll('.register').addClass('used')
	$register.addClass('active');

	// Activate Screen
	$('.screen').removeClass('active');
	$('#' + $register.data('id')).addClass('active');
};
$('.register').on('click', registerForward);


var counter = 0;

function updated(event){
	if ($('#plusErw').on('click,', counter+1)) {
		
		$('#valueNumber2').text(counter);
		counter > 6 == false;

	} else if($('#minusErw').on('click,', counter-1)) {	
		
		$('#valueNumber2').text(counter);
		counter<0 == false;
	}
};


$('#plusErw').on('click', function (event) {
	var newVal = parseInt($('#minErwValue').text()) + 1;
	newVal = Math.min(newVal, 6);
	$('#minErwValue span').text(newVal);
});
$('#minusErw').on('click', function (event) {
	var newVal = parseInt($('#minErwValue span').text()) - 1;
	newVal = Math.max(newVal, 0);
	$('#minErwValue span').text(newVal);
});
$('#plusKind').on('click', function (event) {
	var newVal = parseInt($('#minKindValue').text()) + 1;
	newVal = Math.min(newVal, 6);
	$('#minKindValue span').text(newVal);
});
$('#minusKind').on('click', function (event) {
	var newVal = parseInt($('#minKindValue').text()) - 1;
	newVal = Math.max(newVal, 0);
	$('#minKindValue span').text(newVal);
});



	
});
