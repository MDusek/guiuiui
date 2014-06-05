$(document).ready(function () {

function screenForward (event) {

	// Activate Screen
    var $screens = $(this).closest('.screen');
    $screens.removeClass( 'active' );
    $screens.next('.screen').addClass( 'active' );

	// Activate Register
	$('.register').removeClass('active');
	$('[data-id=' + $screens.data('next-id') + ']').addClass('active');
}

$( '#screen1').find('.button.button-success').on('click', screenForward );
$( '#screen2' ).find( '.button' ).on( 'click', screenForward );
$( '#screen3' ).find( '.button ').on('click', screenForward );
$( '#screen4' ).find( '.button.button-success').on('click',screenForward );
$( '#screen5' ).on('click',screenForward );


$('.button.button-success').on( 'click', function( e ){
	var inhalt = $('.valuefield').html();
	$('#register1 span').html(  inhalt  );
});

$('#button-oneWay' ).on( 'click', function( e ){
	var inhalt = $( this).html();
	$('#register2 span').html(  inhalt  );
});

$('#button-backWay' ).on( 'click', function( e ){
	var inhalt = $( this).html();
	$('#register2 span').html(  inhalt  );
});

$('.button.button-1class' ).on( 'click', function( e ){
	var inhalt = $( this).html();
	$('#register3 span ').html(  inhalt  );
});
$('#button-2class' ).on( 'click', function( e ){
	var inhalt = $( this).html();
	$('#register3 span ').html(  inhalt  );
});
 $('#success4').on( 'click', function( e ){
	var inhalt = ( '87.50 CHF').html();
	$('#register5 span ').html(  inhalt  );
});


function registerForward(event){

	// Activate Register
	var $register = $(this);
	$('.register').removeClass('active');
	$register.addClass('active');

	// Activate Screen
	$('.screen').removeClass('active');
	$('#' + $register.data('id')).addClass('active');
}
$('.register').on('click', registerForward);



});